import 'expo-dev-client';
import 'react-native-get-random-values';
import React from 'react';
import {registerRootComponent} from 'expo'
import {AppWrapperSync} from './src/AppWrapperSync';
import {SYNC_CONFIG} from './sync.config';

const App = () =>
   (
    <AppWrapperSync appId={SYNC_CONFIG.appId} />
  );

registerRootComponent(App);
