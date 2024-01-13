import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserIdentification } from '../screens/UserIdentification';
import { Welcome } from '../screens/Welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CreateUser } from '../screens/CreateUser';
import { PhoneConfirmation } from '../screens/PhoneConfirmation';
import { ProfileVerification } from '../screens/ProfileVerification';

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
        name='UserIdentification'
        component={UserIdentification}
      />
      <StackRoutes.Screen
        name='PhoneConfirmation'
        component={PhoneConfirmation}
      />

<StackRoutes.Screen
        name='ProfileVerification'
        component={ProfileVerification}
      />
    </StackRoutes.Navigator>
  )
}