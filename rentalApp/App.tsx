import { Inter_100Thin, Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { ProfileInformation } from './src/screens/ProfileInformation'





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
      <ProfileInformation />
    </NativeBaseProvider>


  );
}


