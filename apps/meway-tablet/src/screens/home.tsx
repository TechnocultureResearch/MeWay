import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import File from "../files/component";
import { getBucketListFromS3 } from "../../aws/s3client";
export const HomeScreen = () => {
  getBucketListFromS3("meway-ads");
  return (
    <SafeAreaView>
      <View className="h-full w-full p-4">
        <Text className="text-5xl font-bold mx-auto text-purple-600">
          This One Is MeWay-Tabl
        </Text>
      </View>
      <File />
    </SafeAreaView>
  );
};
