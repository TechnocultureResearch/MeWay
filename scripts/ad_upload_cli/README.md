### Install packages

Navigate to the `ad_upload_cli` folder

```
cd scripts/ad_upload_cli
```

Using pipenv:

```
pipenv install
```

### Run the script:

```
python ad_uploader_cli.py <video_list.csv> <s3_bucket_name>
```

Run `python ad_uploader_cli.py --help` for more details about the arguments.

### Run Tests:

```
pipenv shell
pytest
```
