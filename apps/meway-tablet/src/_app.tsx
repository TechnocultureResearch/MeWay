import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
export const App = () => {
  return (
    <SafeAreaView>
      <View className={`bg-black`}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
