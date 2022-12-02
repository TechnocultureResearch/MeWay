import React from "react";

import { SafeAreaView, Text, View } from "react-native";
import MinimalUi from "../components/MinimalUi";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-screen w-screen p-[15px]">
        <MinimalUi />
      </View>
    </SafeAreaView>
  );
};
