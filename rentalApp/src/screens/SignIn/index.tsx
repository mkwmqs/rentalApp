import React, { useState } from 'react';
import { View, Text,  Button, ScrollView } from 'native-base'
import { Center, Divider, Radio, Stack } from 'native-base';
import {  TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { InfoBottom } from '../../components/InfoBottom';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';
import { FontAwesome } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState("1");
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();


  const handleAppleLogin = () => {
    
  };

  const handleGoogleLogin = () => {
   
  };

  const handleFacebookLogin = () => {
    
  };

  // const handlePress = (value) => {
  //   setSelectedValue(value);
    
  // };

  function handleReturnScreen() {
    navigator.navigate('Welcome')
  }


  return (
    <>
    
<ScrollView>
        <View style={{marginVertical: 24, paddingHorizontal:8 }}>
          <Icon style={{ paddingLeft: 22 }} name="arrow-left" size={18} onPress={handleReturnScreen} />
        </View>
         <View style={{marginVertical: 18, paddingHorizontal:8 }} >
        <Text style={{marginTop:12}}>Email</Text>
        <View style={{ borderRadius:10, borderWidth: 1,borderColor: 'grey', padding:16}}>
      
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
     
      <Text>Senha </Text>
      <View style={{marginTop:10, borderRadius:10, borderWidth: 1,borderColor: 'grey', padding:16}}>
     
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>

     
      <Text style={{textAlign: 'center',fontWeight: 'bold', padding:4 }}>Enviaremos uma mensagem para você confirmando o seu número. Podem ser aplicadas tarifas padrões de dados e mensagens.</Text>


     
     

       

        <TouchableOpacity>
          <Text style={{textAlign:'center', padding: 4}}>Esqueceu a senha? Clique aqui</Text>
        </TouchableOpacity>

            <View style={{padding: 4,marginTop: 2,}}>
<          ColoredButton color={color.green} title='Continuar' />
             </View>

      <Divider mt={20}  style={{ width: '100%' }} />
      <TouchableOpacity style={{ alignItems: 'center',borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 14,marginTop: 14,}} onPress={handleAppleLogin}>
        <Text>
          <Icon name="apple" /> <Text style={{fontWeight: 'bold'}}>Continuar com Apple</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center',borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 14,marginTop: 14,}} onPress={handleGoogleLogin}>
        <Text>
          <Icon name="google" /> <Text style={{fontWeight: 'bold'}}>Continuar com Google</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center',borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 14,marginTop: 14,}} onPress={handleFacebookLogin}>
        <Text>
          <Icon name="facebook" /><Text style={{fontWeight: 'bold',}}> Continuar com Facebook</Text>
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{gap:8, padding:10, margin:10}}>
    <InfoBottom/>
    </View>
    </ScrollView>
    </>
  );
};

