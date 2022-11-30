/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const secrets = require('./config');

function createS3Instance() {
    const s3 = new AWS.S3({
        credentials: {
            accessKeyId: secrets.awsCreds.accessKey,
            secretAccessKey: secrets.awsCreds.secretKey
        },
        region: 'ap-south-1'
    });
    return s3;
}

async function getBucketListFromS3(bucketName) {
    const s3 = createS3Instance();
    const params = {
        Bucket: bucketName,
        MaxKeys: 1000
    }

    const bucketData = s3.listObjects(params).promise();
    return bucketData || {};
}

async function getPresignedURL(bucketName, key) {
    const s3 = createS3Instance();
    const params = {
        Bucket: bucketName,
        Key: key,
        Expires: 600
    }

    const preSignedURL = await s3.getSignedUrl('getObject', params);
    return preSignedURL;
}

module.exports = {
    getBucketListFromS3,
    getPresignedURL
}