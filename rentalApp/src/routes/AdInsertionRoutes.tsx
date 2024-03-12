import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AdCover from '../screens/advertisement/AdCover';
import { AdBehaviourQuestions } from '../screens/advertisement/AdBasicQuestions/adBehaviourQuestions';
import { AdNoticePeriod } from '../screens/advertisement/AdBasicQuestions/adNoticePeriod';
import { AdAddOns } from '../screens/advertisement/AdAddOns';
import { AdPicturesIntroduction } from '../screens/advertisement/AdPicturesIntroduction';
import { AdPicturesInsertion } from '../screens/advertisement/AdPicturesInsertion';
import AdIntroduction from '../screens/advertisement/AdIntroduction';
import { AdSimulation } from '../screens/advertisement/AdSimulation';
import { AdProfileIntroduction } from '../screens/advertisement/AdProfileIntroduction';
import { AdProfileFirstStep } from '../screens/advertisement/AdProfileFirstStep';
import { AdVehicleSelection } from '../screens/advertisement/AdVehicleSelection';
import { AdVehicleDetails } from '../screens/advertisement/AdVehicleDetails';
import { AdIntendedLength } from '../screens/advertisement/AdBasicQuestions/adIntendedLength';

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
            name="AdSimulation"
            component={AdSimulation}
      />
      <Stack.Screen
            name="AdProfileIntroduction"
            component={AdProfileIntroduction}
      />  
      <Stack.Screen
            name="AdProfileFirstStep"
            component={AdProfileFirstStep}
      />  
      <Stack.Screen
            name="AdVehicleSelection"
            component={AdVehicleSelection}
      />        
      <Stack.Screen
            name="AdVehicleDetails"
            component={AdVehicleDetails}
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
            name='AdIntendedLength'
            component={AdIntendedLength}
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