import { getBucketListFromS3, getPresignedURL } from "./s3client";

export const s3Get = async () => {
  try {
    const bucketData = await getBucketListFromS3("meway-ads");
    const { Contents = [] } = bucketData;
    return Contents.map((content) => {
      return {
        key: content.Key,
        size: (content.Size ?? 0 / 1024).toFixed(1) + " KB",
        lastModified: content.LastModified,
      };
    });
  } catch (ex) {
    return [];
  }
};

export const getSignedUrl = async (bucketkey: string) => {
  try {
    const key = bucketkey;
    const url = await getPresignedURL("meway-ads", key);
    return url;
  } catch (ex) {
    console.error(ex);
    return "error ";
  }
};
