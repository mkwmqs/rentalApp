import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AdCover from '../screens/advertisement/AdCover';
import { AdBehaviourQuestions } from '../screens/advertisement/AdBasicQuestions/adBehaviourQuestions';
import { AdNoticePeriod } from '../screens/advertisement/AdBasicQuestions/adNoticePeriod';
import { AdRentalLength } from '../screens/advertisement/AdBasicQuestions/adRentalLength';
import { AdAddOns } from '../screens/advertisement/AdAddOns';
import { AdPicturesIntroduction } from '../screens/advertisement/AdPicturesIntroduction';
import { AdPicturesInsertion } from '../screens/advertisement/AdPicturesInsertion';
import AdIntroduction from '../screens/advertisement/AdIntroduction';

const Stack = createStackNavigator();

export const AdInsertionRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{cardStyle: {backgroundColor: Colors.white},
        headerShown: false,
      }}
    >

      <Stack.Screen
            name="AdIntroduction"
            component={AdIntroduction}
        />      
        <Stack.Screen
            name="AdCover"
            component={AdCover}
        />
        <Stack.Screen
            name='AdBehaviourQuestions'
            component={AdBehaviourQuestions}
          />
        <Stack.Screen
            name='AdNoticePeriod'
            component={AdNoticePeriod}
        />
        <Stack.Screen
            name='AdRentalLength'
            component={AdRentalLength}
        />
        <Stack.Screen
            name="AdAddOns"
            component={AdAddOns}
        />

        <Stack.Screen
            name="AdPicturesIntroduction"
            component={AdPicturesIntroduction}
        />

        <Stack.Screen
            name="AdPicturesInsertion"
            component={AdPicturesInsertion}
        />

    </Stack.Navigator>
  )
}