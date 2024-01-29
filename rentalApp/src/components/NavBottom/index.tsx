import { View, Text } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { Center } from 'native-base';

export function NavBottom() {
  return (
    <View >
      <Text>{Constants.expoConfig.extra.TESTE}</Text>
    </View>
  )
}