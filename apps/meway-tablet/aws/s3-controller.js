/* eslint-disable @typescript-eslint/no-var-requires */
const { getBucketListFromS3, getPresignedURL} = require('./s3-service');
async function s3Get () {
    try{
        const bucketData = await getBucketListFromS3('meway-ads');
        let arr=[];
    
        const {Contents = []} = bucketData; 
        for(let i=0; i<Contents.length; i++) {
            const {Key} = Contents[i];
            const preSignedURL = await getPresignedURL('meway-ads', Key);
            arr.push(preSignedURL);
        }
        return arr;
    }catch(ex) {
        return ["No data in the bucket"]
    }
}


async function getSignedUrl(key) {
    try {
        const {key} = key;
        const url = await getPresignedURL('meway-ads', key);
        return url;

    } catch(ex) {
        return '';
    }
}

module.exports = {
    s3Get,
    getSignedUrl
}
