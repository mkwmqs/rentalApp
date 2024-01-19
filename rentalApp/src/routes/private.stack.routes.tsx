
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SignIn } from '../screens/SignIn'


const StackRoutes = createStackNavigator()

export function PrivateRoutes() {
  return (
    <StackRoutes.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: Colors.white,
        },
        headerShown: false,
      }}
    >

      <StackRoutes.Screen
        name='SignIn'
        component={SignIn}
      />

    </StackRoutes.Navigator>
  )
}