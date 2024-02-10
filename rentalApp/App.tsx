import { Inter_100Thin, Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';
import { Profiler, useEffect } from 'react';
import React from 'react';

import { AutoSelector } from './src/screens/AutoSelector';
import { CarDetail } from './src/screens/CarDetail';
import { Routes } from './src/routes';
import { ProfileScreen } from './src/screens/Profile';

// import { SignIn } from './src/screens/SignIn';




export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin, Inter_400Regular, Inter_700Bold
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])
  if (!fontsLoaded) {

    return undefined;
  } else {

    SplashScreen.hideAsync()
  }
  return (
    <NativeBaseProvider >
      <ProfileScreen/>
    </NativeBaseProvider>


  );
}


