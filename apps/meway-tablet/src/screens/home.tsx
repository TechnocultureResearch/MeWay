import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {AppStateExample} from '../utilities/AppState';


export const HomeScreen=(props: { navigation: { navigate: (arg0: string) => void; }; })=> {
  console.log(AppStateExample());
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen To initiate BackGround Process go to background screen and register the task</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BackgroundFetchScreen');
        }}>
        <Text className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}
