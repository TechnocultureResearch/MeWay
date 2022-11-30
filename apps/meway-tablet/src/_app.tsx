import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/home';
import { BackgroundFetchScreen } from './files/BackgroundFetchScreen';
const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" detachInactiveScreens>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BackgroundFetchScreen" component={BackgroundFetchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
