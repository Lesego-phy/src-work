/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Router from './src/navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {

  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Taxi App needs access to your location " +
            "so you can show off where you are.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // this will only run once when the app opens

   useEffect(() => {
     if (Platform.OS === 'android') {
       androidPermissions();
     } else {
       // IOS
       Geolocation.requestAuthorization();
     }
   }, [])
 
  return (
    <>
      <StatusBar style={backgroundStyle} />
        <Router />
    </>
  );
};



export default App;
