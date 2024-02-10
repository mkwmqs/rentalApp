import React, { Profiler } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from '../screens/Welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CreateUser } from '../screens/CreateUser';
import { PhoneConfirmation } from '../screens/PhoneConfirmation';
import { SignIn } from '../screens/SignIn';
import { Notification } from '../screens/EnableNotification';
import { ProfileScreen } from '../screens/Profile';
import { IdentiVerification } from '../screens/IdentityVerification';
import { AuthScreen } from '../screens/LoginRegistering';
import { PersonalInformation } from '../screens/PersonalInformation';
import { ProfileInformation } from '../screens/ProfileInformation';

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
        name='SignIn'
        component={SignIn}
      />
      
      <StackRoutes.Screen
        name="Welcome"
        component={Welcome}
      />
      <StackRoutes.Screen
        name='CreateUser'
        component={CreateUser}
      />
      
      <StackRoutes.Screen
        name='PhoneConfirmation'
        component={PhoneConfirmation}
      />
      <StackRoutes.Screen
        name="Notification"
        component={Notification}
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