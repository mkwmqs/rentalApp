import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../hooks/useAuth';
import { PublicRoutes } from './public.stack.routes';
import { AdInsertionRoutes } from './AdInsertionRoutes';


//const { user } = useAuth();
//console.log(user)


export function Routes() {
  
  return (
    <NavigationContainer>
      <AdInsertionRoutes />
    </NavigationContainer>
  )
}