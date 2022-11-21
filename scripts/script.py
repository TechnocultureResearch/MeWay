from pytube import YouTube 
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
import csv
from threading import Thread
import re
import os
import argparse
import sys
import boto3
from botocore.exceptions import ClientError
import tempfile
from typing import List
from pydantic import BaseModel
from urllib.parse import urlparse


from dotenv import load_dotenv


load_dotenv()


download_threads = []
upload_threads = []

class InvalidURL(Exception):
    """Raise Exception when the URL is invalid"""
    pass

class TimeStamp(BaseModel):
    start_min: int
    start_sec: int
    end_min: int
    end_sec: int

class VideoDetail(BaseModel):
    url: str
    timestamps: List[TimeStamp]

class VideoList(BaseModel):
    entry: List[VideoDetail]

class YTExtractor():
    def __init__(self, video_list):
        self.video_list = video_list

    def url_check(self, url):
        try:
            result = urlparse(url)
            if all([result.scheme, result.netloc]):
                return True
            else:
                return False
        except:
            return False

    def parse(self):
        with open(self.video_list, mode ='r') as file:
            video_list = []
            csvFile = csv.reader(file)
            csvList = list(enumerate(csvFile))
            length = len(csvList)
            if not length:
                raise ValueError(f"The csv file {self.video_list} is empty!")
            for index, row in csvList:
                row_index = index +1
                row_length = len(row)
                if row_length == 0:
                        print(f"The line {row_index} is empty!!!")
                        continue
                elif row_length != 2:
                    raise IndexError(f"The row {row_index} of the csv file contains {row_length} columns.\nExpected: 2 columns")

                url = row[0]
                if not self.url_check(url):
                    raise InvalidURL(f"The provided url in the line {row_index} is INVALID.\n URL: {url}")
                
                separator = ';'
                timestamps = row[1].split(separator)
                if not timestamps:
                    raise ValueError(f"The timestamps in the row {row_index} is not properly separated by the separator: {separator}.\ntimestamps: {row[1]}")
                yt_timestamps = []

                for timestamp in timestamps:
                    pattern = re.compile('\d{1,2}')
                    if not pattern.match(timestamp):
                        raise ValueError(f"The timestamp format is not correct in the row {row_index}.\ntimestamp: {timestamp}")
                    start_min, start_sec, end_min, end_sec = map(int, re.split('[:-]', timestamp))
                    
                    ts = TimeStamp(start_min=start_min, start_sec=start_sec, end_min=end_min, end_sec=end_sec)
                    yt_timestamps.append(ts)
                
                vd = VideoDetail(url=url, timestamps=yt_timestamps)
                video_list.append(vd)
                
            vl = VideoList(entry=video_list)
            return vl

def download_and_extract_yt_video(vd: VideoDetail) -> None:
    """Download Youtube Videos and Extract into subclips

    Args:
        vd (VideoDetail): VideoDetail object that contains url and List[TimeStamp] attributes
    """
    yt = YouTube(vd.url)
    yt.streams.filter(file_extension='mp4')
    vid = yt.streams.get_by_itag(22)
    vid_title = vid.title
    print(f"Started downloading video: {vid_title}")
    downloaded_video_path = vid.download(DOWNLOAD_PATH)
    print(f"Successfully downloaded video: {vid_title}\nDownload path: {downloaded_video_path}")
    print(f"Extracting subclips of the video: {vid_title}")
    for timestamp in vd.timestamps:
        extract_subclip(downloaded_video_path, timestamp)

def extract_subclip(file_location: str, timestamp: TimeStamp) -> None:
    """Extract videos into subclips

    Args:
        file_location (str): Location of video file that needs to be extracted into subclips
        timestamp (TimeStamp): TimeStamp object that contains start_min, start_sec, end_min, end_sec attributes
    """
    starttime = (timestamp.start_min * 60) + timestamp.start_sec
    endtime = (timestamp.end_min * 60) + timestamp.end_sec
    _, tail = os.path.split(file_location)
    filename = tail[0:-5]
    target_filename = f'{filename}_{timestamp.start_min}_{timestamp.start_sec}_{timestamp.end_min}_{timestamp.end_sec}.mp4'
    targetname = os.path.join(EXTRACTED_ADS_PATH, target_filename)
    print(f"Extracting: {target_filename}")
    ffmpeg_extract_subclip(file_location, starttime, endtime, targetname=targetname)
    print(f"Extracted: {target_filename}")


def upload_to_s3(s3_client, full_file_path: str, bucket_name: str, key: str) -> None:
    """Upload the video to S3

    Args:
        s3_client (s2.client): Boto3 S3 client
        full_file_path (str): Location of the Video that needs to be uploaded to S3.
        bucket_name (str): Name of the S3 bucket
        key (str): Name of the uploaded file in S3
    """
    def check(s3_client, bucket_name: str, key: str):
        try:
            s3_client.head_object(Bucket=bucket_name, Key=key)
        except ClientError as e:
            return int(e.response['Error']['Code']) != 404
        return True

    print(f"Checking if the file {key} already exists in s3.")
    exists = check(s3_client, bucket_name, key)
    if not exists:
        print(f"File: {key} does not exists in S3")
        print(f"Started uploading {key} to S3")
        s3_client.upload_file(full_file_path, bucket_name, key)
        print(f"Successfully uploaded {key} to s3")
    else:
        print(f"File {key} already exists in S3. Cancelled uploading")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Download Youtube video, extract into subclips and upload to S3')
    parser.add_argument('video_list', help='Video list location')
    parser.add_argument('s3_bucket_name', help='Name of the AWS S3 Bucket where downloaded Ads will be uploaded.')
    parsed_args = parser.parse_args(sys.argv[1:])


    VIDEO_LIST = fr"{parsed_args.video_list}"
    S3_BUCKET_NAME = fr"{parsed_args.s3_bucket_name}"

    if not os.path.isfile(VIDEO_LIST):
        raise Exception("The given file is does not exists. Enter a valid file name with a valid file path.")

    download_folder = "YTVids"
    if not os.path.exists(download_folder):
        os.mkdir(download_folder)
    temp_extract_ads_directory = tempfile.TemporaryDirectory(suffix=None, prefix="YTAds", dir='.')
    DOWNLOAD_PATH = download_folder
    EXTRACTED_ADS_PATH = temp_extract_ads_directory.name

    yt_extractor = YTExtractor(VIDEO_LIST)
    vl = yt_extractor.parse()


    for vd in vl.entry:
        process = Thread(target=download_and_extract_yt_video, kwargs={'vd': vd})
        process.start()
        download_threads.append(process)

    for process in download_threads:
        process.join()

    #UPLOADING

    AWS_ACCESS_KEY = os.environ.get('AWS_ACCESS_KEY')
    AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
    s3_client = boto3.client(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    )

    yt_ads = os.listdir(EXTRACTED_ADS_PATH)
    for ad in yt_ads:
        full_file_path = os.path.join(EXTRACTED_ADS_PATH, ad)
        process = Thread(target=upload_to_s3, args=[s3_client, full_file_path, S3_BUCKET_NAME, ad])
        process.start()
        upload_threads.append(process)

    for process in upload_threads:
        process.join()