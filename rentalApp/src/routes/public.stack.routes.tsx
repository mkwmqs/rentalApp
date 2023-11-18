import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserIdentification } from '../screens/UserIdentification';
import { Welcome } from '../screens/Welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const StackRoutes = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <StackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: Colors.white,
      },
      headerShown:false,
    }}
  >
      <StackRoutes.Screen
        name="Welcome"
        component={Welcome}
      />
      <StackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
      />
    </StackRoutes.Navigator>
  )
}