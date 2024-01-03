


import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { PublicRoutes } from './public.stack.routes';


export function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  )
}