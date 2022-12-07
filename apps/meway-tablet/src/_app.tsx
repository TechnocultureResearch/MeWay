import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
export const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};
