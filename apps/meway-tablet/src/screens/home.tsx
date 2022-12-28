import React from "react";

import { SafeAreaView, View } from "react-native";
import MinimalUi from "../components/MinimalUi";
import { FaceCount } from "./FaceCount";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-screen  w-screen p-[10px]">
        <FaceCount />
        <MinimalUi />
      </View>
    </SafeAreaView>
  );
};
