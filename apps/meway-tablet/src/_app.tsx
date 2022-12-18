import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./screens/home";
import { FaceCount } from "./screens/FaceCount";
const Stack = createStackNavigator();
import * as Sentry from "sentry-expo";
export const App = () => {
  Sentry.Native.nativeCrash();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" detachInactiveScreens>
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="FaceCount" component={FaceCount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
