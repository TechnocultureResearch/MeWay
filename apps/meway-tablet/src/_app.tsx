import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-get-random-values";

import { HomeScreen } from "./screens/home";

export const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar />
    </SafeAreaProvider>
  );
};
