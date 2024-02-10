import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../hooks/useAuth';
import { PublicRoutes } from './public.stack.routes';





export function Routes() {
  const { user } = useAuth();
  console.log(user)
  
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  )
}