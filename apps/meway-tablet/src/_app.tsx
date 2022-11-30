import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-get-random-values";
import { HomeScreen } from "./screens/home";
import { NativeWindStyleSheet } from "nativewind";
import MinimalUi from "./components/MinimalUi";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const App = () => {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      <MinimalUi />
      <StatusBar />
    </SafeAreaProvider>
  );
};
