import React from "react";
import { downloadAsync, documentDirectory } from "expo-file-system";
import { View, Text } from "react-native";
import { s3Get, getSignedUrl } from "../../aws/listbucket";
let globalUrl = "";
async function url() {
  const url = await getSignedUrl(process.env.aws_bucket_key || "");
  globalUrl = url;
  return url;
}
const File = () => {
  downloadAsync(globalUrl, documentDirectory + "small.mp4")
    .then(({ uri }) => {
      console.log("Finished downloading to ", uri);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <View>
      <Text></Text>
      <Text>Download Files all s3 Bucket </Text>
    </View>
  );
};

//exports default the module
export default File;
