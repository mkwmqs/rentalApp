import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'native-base';



export const AuthScreen = () => {
  const handleEmailLogin = () => {
    
  };

  const handleAppleLogin = () => {
    
  };

  const handleGoogleLogin = () => {
   
  };

  const handleFacebookLogin = () => {
    
  };
 

  return(
  
   
    <View style={{gap:26, margin:50, padding:50}}>
      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleEmailLogin}>
        <Text>
          <Icon name="envelope" /> <Text style={{fontWeight: 'bold'}}>Continuar com e-mail </Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleAppleLogin}>
        <Text>
          <Icon name="apple" /> <Text style={{fontWeight: 'bold'}}>Continuar com Apple</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleGoogleLogin}>
        <Text>
          <Icon name="google" /> <Text style={{fontWeight: 'bold'}}>Continuar com Google</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleFacebookLogin}>
        <Text>
          <Icon name="facebook" /> <Text style={{fontWeight: 'bold'}}> Continuar com Facebook</Text>
        </Text>
      </TouchableOpacity>
      <Divider mt={20} />

      <Text style={{fontWeight: 'bold', margin:20, padding:10 ,}}>   Português (BR)    R$ BRL</Text>
      <Text style={{padding:10, margin:20}}>  2023 Ubinner, Inc.
            Privacidade    -   Termos   -   Mapa do Site
    - Informações da empresa</Text>
    </View>
  );
};


