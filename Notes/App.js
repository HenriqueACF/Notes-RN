import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Stacks/MainStack'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

