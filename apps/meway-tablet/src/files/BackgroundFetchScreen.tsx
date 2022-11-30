import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {
  getStatusAsync,
  registerTaskAsync,
  unregisterTaskAsync,
  BackgroundFetchResult,
  BackgroundFetchStatus,
} from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {s3Get} from '../../aws/s3-controller';
import { documentDirectory, downloadAsync } from 'expo-file-system';
import Button from '../components/Button';
import {AppStateExample} from  "../utilities/AppState";

const BACKGROUND_FETCH_TASK = 'background-fetch';
const LAST_FETCH_DATE_KEY = 'background-fetch-date';

export const BackgroundFetchScreen=()=> {
  const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
  const [fetchDate, setFetchDate] = React.useState<Date | null>(null);
  const [status, setStatus] = React.useState<BackgroundFetchStatus | null>(null);
  const appState = AppStateExample();

  React.useEffect(() => {
    if ( appState=== 'active') {
      refreshLastFetchDateAsync();
      console.log("this one is called");
    }
  }, [appState]);

  const onFocus = React.useCallback(() => {
    refreshLastFetchDateAsync();
    checkStatusAsync();
  }, []);
  useFocusEffect(onFocus);

  const refreshLastFetchDateAsync = async () => {
    const lastFetchDateStr = await AsyncStorage.getItem(LAST_FETCH_DATE_KEY);

    if (lastFetchDateStr) {
      setFetchDate(new Date(+lastFetchDateStr));
    }
  };

  const checkStatusAsync = async () => {
    const status = await getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
    setStatus(status);
    setIsRegistered(isRegistered);
  };

  const toggle = async () => {
    if (isRegistered) {
      await unregisterTaskAsync(BACKGROUND_FETCH_TASK);
    } else {
      await registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 10, // 1 minute
        stopOnTerminate: false,
        startOnBoot: true,
      });
    }
    setIsRegistered(!isRegistered);
  };

  const renderText = () => {
    if (!fetchDate) {
      return <Text>There was no BackgroundFetch call yet.</Text>;
    }
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text>Last background fetch was invoked at:</Text>
        <Text style={styles.boldText}>{fetchDate.toString()}</Text>
      </View>
    );
  };
  console.log(fetchDate);
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>
          Background fetch status:{' '}
          <Text style={styles.boldText}>{status ? BackgroundFetchStatus[status] : null}</Text>
        </Text>
      </View>
      <View style={styles.textContainer}>{renderText()}</View>
      <Button
        buttonStyle={styles.button}
        title={isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}
        onPress={toggle}
      />
    </View>
  );
}

BackgroundFetchScreen.navigationOptions = {
  title: 'Background Fetch',
};

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const now = Date.now();
  console.log("This function runs");
  //Invoking s3Get() functions to list all the data's and then downloading one by one using using downloadAsync
  s3Get().then((data)=>{
    console.log(data);
    data.map((item)=>{
      downloadAsync(item, documentDirectory+"/meway-ads/+.mp4" ).then((data)=>{
        console.log(item+data+" this files has been downloaded");
      }
      )
    })
  })

  console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
  await AsyncStorage.setItem(LAST_FETCH_DATE_KEY, now.toString());

  return BackgroundFetchResult.NewData;
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginVertical: 5,
  },
  textContainer: {
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
