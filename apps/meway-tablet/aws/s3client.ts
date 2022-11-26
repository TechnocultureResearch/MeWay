import AWS from "aws-sdk";

export default function createS3Instance() {
  const s3 = new AWS.S3(AWS.config.loadFromPath("./config.json"));
  return s3;
}

export const getBucketListFromS3 = async (bucketName: string) => {
  const s3 = createS3Instance();
  const params = {
    Bucket: bucketName,
    MaxKeys: 10,
  };

  const bucketData = s3.listObjects(params).promise();
  return bucketData || {};
};

export const getPresignedURL = async (bucketName: string, key: string) => {
  const s3 = createS3Instance();
  const params = {
    Bucket: "meway-ads",
    Key: "",
    Expires: 60,
  };

  const preSignedURL = await s3.getSignedUrl("getObject", params);
  return preSignedURL;
};
