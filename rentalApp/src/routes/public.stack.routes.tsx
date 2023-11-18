import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserIdentification } from '../screens/UserIdentification';

const StackRoutes = createStackNavigator();

export  const PublicRoutes= ()=> {
  return(
 <StackRoutes.Navigator >
  <StackRoutes.Screen
  name='UserIdentification'
  component={UserIdentification}   
  />
  </StackRoutes.Navigator>
  )
}