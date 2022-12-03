import React from "react";

import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MinimalUi from "../components/MinimalUi";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-screen w-screen bg-black p-[15px]">
        <MinimalUi />
      </View>
    </SafeAreaView>
  );
};
