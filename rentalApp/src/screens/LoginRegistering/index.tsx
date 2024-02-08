import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'native-base';
import { NavBottom } from '../../components/NavBottom';
import { InfoBottom } from '../../components/InfoBottom';



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
  
   <>
    <View style={{gap:18, margin:50, padding:50}}>
      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 8,marginTop: 8}} onPress={handleEmailLogin}>
        <Text>
          <Icon name="envelope" /> <Text style={{fontWeight: 'bold'}}>Continuar com e-mail </Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 8,marginTop: 8}} onPress={handleAppleLogin}>
        <Text>
          <Icon name="apple" /> <Text style={{fontWeight: 'bold'}}>Continuar com Apple</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 8,marginTop: 8}} onPress={handleGoogleLogin}>
        <Text>
          <Icon name="google" /> <Text style={{fontWeight: 'bold'}}>Continuar com Google</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 8,marginTop: 8,}} onPress={handleFacebookLogin}>
        <Text>
          <Icon name="facebook" /> <Text style={{fontWeight: 'bold'}}> Continuar com Facebook </Text>
        </Text>
      </TouchableOpacity>
  
    
    </View>
    <View>
    <InfoBottom/>
    </View>
     <NavBottom/>
     </>
  );
};


