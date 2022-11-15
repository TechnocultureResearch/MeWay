from pytube import YouTube 
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
import csv
# from threading import Thread
import re
import os
import argparse
import sys
import boto3
from botocore.exceptions import ClientError
from dotenv import load_dotenv


load_dotenv()


parser = argparse.ArgumentParser(description='Download Youtube video, extract into subclips and upload to S3')
parser.add_argument('video_list', help='Video list location')
parser.add_argument('download_path', help='Location for downloaded YouTube videos')
parser.add_argument('extracted_ads_path', help='Location for extracted YouTube subclips')
parser.add_argument('s3_bucket_name', help='Name of the AWS S3 Bucket where downloaded Ads will be uploaded.')
parsed_args = parser.parse_args(sys.argv[1:])


VIDEO_LIST = fr"{parsed_args.video_list}"
DOWNLOAD_PATH = fr"{parsed_args.download_path}"
EXTRACTED_ADS_PATH = fr"{parsed_args.extracted_ads_path}"
S3_BUCKET_NAME = fr"{parsed_args.s3_bucket_name}"



def download_yt_video(video_url, timestamps):
    """Download Youtube Videos and Extract into subclips

    Args:
        video_url (str): The URL of the Youtube Video
        timestamps (list[str]): List of timestamps used to extract the video into subclips
    """
    yt = YouTube(video_url)
    yt.streams.filter(file_extension='mp4')
    vid = yt.streams.get_by_itag(22)
    vid_title = vid.title
    print(f"Started downloading video: {vid_title}")
    downloaded_video_path = vid.download(DOWNLOAD_PATH)
    print(f"Successfully downloaded video: {vid_title}\nDownload path: {downloaded_video_path}")
    print(f"Extracting subclips of the video: {vid_title}")
    for timestamp in timestamps:
        extract_subclip(downloaded_video_path, timestamp)

def extract_subclip(file_location, timestamp):
    """Extract videos into subclips

    Args:
        file_location (str): Location of video file that needs to be extracted into subclips
        timestamp (str): timestamp of the video which needs to be extracted into a subclip
    """
    start_min, start_sec, end_min, end_sec = map(int, re.split('[:-]', timestamp))
    starttime = (start_min * 60) + start_sec
    endtime = (end_min * 60) + end_sec
    _, tail = os.path.split(file_location)
    filename = tail[0:-5]
    target_filename = f'{filename}_{start_min}_{start_sec}_{end_min}_{end_sec}.mp4'
    targetname = os.path.join(EXTRACTED_ADS_PATH, target_filename)
    print(f"Extracting: {target_filename}")
    ffmpeg_extract_subclip(file_location, starttime, endtime, targetname=targetname)
    print(f"Extracted: {target_filename}")

AWS_ACCESS_KEY = os.environ.get('AWS_ACCESS_KEY')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')

s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)
def upload_to_s3(file_location, target_filename):
    """Upload the video to S3

    Args:
        file_location (str): Location of the Video that needs to be uploaded to S3.
        target_filename (str): Name of the uploaded file in S3

    Returns:
        bool: returns True if the video is successfully uploaded else, returns False
    """
    try:
        s3_client.upload_file(file_location, S3_BUCKET_NAME, target_filename)
    except ClientError as e:
        print(e)
        return False
    except Exception as e:
        print(e)
        return False
    return True


with open(VIDEO_LIST, mode ='r')as file:
    csvFile = csv.reader(file)
    for lines in csvFile:
        yt_url = lines[0]
        timestamps = lines[1].split(';')
        download_yt_video(yt_url, timestamps)


yt_ads = os.listdir(EXTRACTED_ADS_PATH)
for video in yt_ads:
    print(f"Uploading {video} to S3")
    full_file_path = os.path.join(EXTRACTED_ADS_PATH, video)
    s3_client.upload_file(full_file_path, S3_BUCKET_NAME, video)
    print(f"Uploaded {video} to S3")