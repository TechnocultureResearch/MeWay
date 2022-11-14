from pytube import YouTube 
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
import csv
from threading import Thread
import re
import time
import os
import argparse
import sys

# from dotenv import load_dotenv
# load_dotenv()


# # load paths as environment variables

# VIDEO_LIST = fr"{os.environ.get('VIDEO_LIST')}"
# # download location of the YouTube video
# DOWNLOAD_PATH = fr"{os.environ.get('DOWNLOAD_PATH')}"
# # location of extracted Ads
# EXTRACTED_ADS_PATH = fr"{os.environ.get('EXTRACTED_ADS_PATH')}"

parser = argparse.ArgumentParser(description='Download Youtube video, extract into subclips and upload to S3')
parser.add_argument('video_list', help='Video list location')
parser.add_argument('download_path', help='Location for downloaded YouTube videos')
parser.add_argument('extracted_ads_path', help='Location for extracted YouTube subclips')
parsed_args = parser.parse_args(sys.argv[1:])

VIDEO_LIST = fr"{parsed_args.video_list}"
DOWNLOAD_PATH = fr"{parsed_args.download_path}"
EXTRACTED_ADS_PATH = fr"{parsed_args.extracted_ads_path}"

threads = []


def download_yt_video(video_url, timestamps):
    yt = YouTube(video_url)
    yt.streams.filter(file_extension='mp4')
    vid = yt.streams.get_by_itag(22)
    vid_title = vid.title
    print(f"Started downloading video: {vid_title}")
    downloaded_video_path = vid.download(DOWNLOAD_PATH)
    # downloaded_video_path = os.path.join(DOWNLOAD_PATH)
    print(f"Successfully downloaded video: {vid_title}\nDownload path: {downloaded_video_path}")
    print(f"Extracting subclips of the video: {vid_title}")
    for timestamp in timestamps:
        extract_subclip(downloaded_video_path, timestamp)

def extract_subclip(file_location, timestamp):
    start_min, start_sec, end_min, end_sec = map(int, re.split('[:-]', timestamp))
    starttime = (start_min * 60) + start_sec
    endtime = (end_min * 60) + end_sec
    head, tail = os.path.split(file_location)
    filename = tail[0:-5]
    target_filename = f'{filename}_{start_min}_{start_sec}_{end_min}_{end_sec}.mp4'
    targetname = os.path.join(EXTRACTED_ADS_PATH, target_filename)
    ffmpeg_extract_subclip(file_location, starttime, endtime, targetname=targetname)
    print(f"Extracted: {target_filename}")

with open(VIDEO_LIST, mode ='r')as file:
    csvFile = csv.reader(file)
    for lines in csvFile:
        yt_url = lines[0]
        timestamps = lines[1].split(';')
        process = Thread(target=download_yt_video, args=[yt_url, timestamps])
        process.start()
        threads.append(process)