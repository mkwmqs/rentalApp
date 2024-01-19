
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { UserIdentification } from '../screens/UserIdentification'



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
        name='UserIdentification'
        component={UserIdentification}
      />

    </StackRoutes.Navigator>
  )
}