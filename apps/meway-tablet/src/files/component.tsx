import React from "react";
import { downloadAsync, documentDirectory, FileInfo } from "expo-file-system";
import { View, Text, Button } from "react-native";
import { s3Get, getSignedUrl } from "../../aws/listbucket";
import { getInfoAsync } from "expo-file-system";
import { makeDirectoryAsync } from "expo-file-system";
import { createDownloadResumable } from "expo-file-system";
let globalUrl = "";
async function url() {
  const url = await getSignedUrl(process.env.aws_bucket_key || "");
  globalUrl = url;
  return url;
}
const File = () => {
  function ensureFolderExists() {
    const path = `${documentDirectory}MyFolder`;
    return getInfoAsync(path).then((info) => {
      if (!info.exists) {
        return makeDirectoryAsync(path).then((uri) => {
          console.log("Created folder" + " " + uri);
        });
      }
      return Promise.resolve();
    });
  }
  ensureFolderExists().then(() => {
    createDownloadResumable(
      "https://meway-ads.s3.ap-south-1.amazonaws.com/%E2%96%B6%2015%20Best%20Creative%20Funniest%20Indian%20Commercial%20Ads%20This%20Decade%20%20TVC%20DesiKaliah%20E8S2_1_54_2_22.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIBNA9nojFYTg0C8i8AiRfeUzqEgq5FK%2Bd%2FR27YpMJfFbAiEA67UCMm5WY4tpSXyU%2BCeZ2FIguMQV3nMY2guA5e8P3EsqjgMI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NjkzMTM5MTM3NTEiDMFqftPakOqaUcV3eSriApvMOFHt2M6vunFgv1AW85ekSCR5sLcsXzsXlyK%2BOEswoZpDm11y79zZhOV4r5cjiPHhRUInav%2BP0tnWVfeBJfPda1PP1nv9rG3yXX0gtjZc7CVkxlA3OpFTPKx2HIVM2XodUIroN8EzxfNj1f8xlchbbAxn94UHYDF54vHMYboCP1j6Y6ZlEkb5%2BgGPXDQGXLH4EMcRgJUbv5cPipmbt9Qmz7WhQhMJut9X9CgEnhOoBCqX7LHt6m8sb1t86zwfpC%2FYnh3kpy7%2F%2BAnal1kXBCwheNQQccpx0IiwDy91J%2B9lciSy%2FOsHQ9Tv2Yr8gr4zHju4FfrJnBty%2FuyTKuCeoHp3I8%2Bz7neO0woroUsdwUgzTxHObothap9giFpmHLMdX6OFw8xgTUFwQNkTi1gJNnYQnHbuYthzFh6clY8eFoyVNRlofUFoxcaWixi5jNAaPQWtmNNltJOpXUQvZ%2FKamIYAYTDesYOcBjqzAnW0cJtftYh4bsSY4FU3uzDH4BvYwD05aQgE4hCIrEusI77XMHrEXOQefixirSQhjLYZAV%2Bw1LREdZUmr2WiYmPepve23rs76QtAMXqA651Zg7jK9j%2Bi3gs3ErvQY1nE8xmF5hoQyfPdfVdGQc4e0n7xQz2MnbdsX%2BlkHUe4GAs6JkglSKPBLCzStuFDRCiLRkn5BuzssKEMyu0WUidte8KD%2BrTAqbekSA0ygyJGMI7t95iPyd9ToraXW8YodqS8Jf7vj7XHpS7YXfBljrs1Xoqlb2DZRp6QKJUUjG69QvuXKjk0SMx%2BBkm%2FYler4HIA2XaCscbbBKA5wPSEzY1KHGX6tc%2F2CD3UZ2It6GjqPMF6rlao49SEtJgAw2zOgoaYY2MbilCc0%2F7MSUkvA8KN2IzPXZM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221125T151450Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYJDOA5OL3D74SAFS%2F20221125%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=1985cb1fcbe4c4bf159e759f1ebaa4424194a7a8b0d8758d7d6ba505a9b6dbfc",
      `${documentDirectory}MyFolder/video.mp4`
    )
      .downloadAsync()
      .then((url) => {
        console.log("downloaded" + " " + url);
      });
  });
  return (
    <View>
      <Text></Text>
      <Button
        onPress={ensureFolderExists}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>Download Files all s3 Bucket </Text>
    </View>
  );
};

//exports default the module
export default File;
