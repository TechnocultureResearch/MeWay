/* eslint-disable no-undef */
import "expo/build/Expo.fx";
import "./webpack.config";
import { Platform } from "react-native";
import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";
import { createRoot } from "react-dom/client";
import {App} from "./src/_app"; /* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  registerRootComponent(App);
}