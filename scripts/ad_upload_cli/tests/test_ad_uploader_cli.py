import os
import sys
import pytest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from ad_uploader_cli import InvalidTimeStampError, InvalidURLError
import ad_uploader_cli as cli


class TestVideosListCSVParser:

    invalid_csv_file = os.path.abspath('tests/invalid_video_list.csv')
    valid_csv_file = os.path.abspath('tests/valid_video_list.csv')

    def test_invalid_timestamp(self):
        with pytest.raises(InvalidTimeStampError):
            vd = cli.VideosListCSVParser(self.invalid_csv_file)
            vd.parse()

    def test_valid_csv_file(self):
        vd = cli.VideosListCSVParser(self.valid_csv_file)
        assert vd.parse() is not None
