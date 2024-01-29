import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from '../screens/Welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CreateUser } from '../screens/CreateUser';
import { PhoneConfirmation } from '../screens/PhoneConfirmation';
import { SignIn } from '../screens/SignIn';

const StackRoutes = createStackNavigator();

export const PublicRoutes = () => {
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
        name="Welcome"
        component={Welcome}
      />
      <StackRoutes.Screen
        name='CreateUser'
        component={CreateUser}
      />
      <StackRoutes.Screen
        name='SignIn'
        component={SignIn}
      />
      <StackRoutes.Screen
        name='PhoneConfirmation'
        component={PhoneConfirmation}
      />

{/* <StackRoutes.Screen
        name='ProfileVerification'
        component={ProfileVerification}
      />
      <StackRoutes.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      /> */}
    </StackRoutes.Navigator>
  )
}