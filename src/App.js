// --------------- LIBRARIES ---------------
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, Fragment } from 'react'
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// --------------- REDUX ---------------
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './Redux/Store';

// --------------- ASSETS ---------------
import Routes from './Routes'
import { Colors } from './CommonConfig';

export default function App() {
  // Ignore all log notifications:
  LogBox.ignoreAllLogs();

  useEffect(() => {
  }, [])

  return (
    <>
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.WHITE} />
            <Routes />
        </PersistGate>
      </Provider>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({})
