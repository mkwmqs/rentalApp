import { ScrollView, View } from 'native-base';
import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity } from 'react-native';
import { InfoBottom } from '../../components/InfoBottom';


export const PhoneNumberVerification = () => {
  

  

  return (
    <ScrollView>
      <View style={{margin:10,justifyContent: 'center', padding:10, marginTop:'18%'}}>
        <Text style={{margin:10,justifyContent: 'center', padding:10,fontWeight:'bold'}}>Verificar o número do telefone celular</Text>
        <Text style={{fontWeight:'bold'}}> BR +55 61 ****-**NN  </Text> 
        <TouchableOpacity>
       <Text>( Alterar )</Text> 
        </TouchableOpacity>
           <Text>Enviamos um WhatsApp com um código de verificação para o número de celular acima.</Text>

        
        <Text style={{fontWeight:'bold',padding:4}}>Insira o código</Text>
        <TextInput
          style={{borderColor: 'gray',borderWidth: 1,borderRadius: 5,paddingHorizontal: 10,marginBottom: 20, padding:4}}
          placeholder=""
          
        />

        <TouchableOpacity >
          <Text style={{justifyContent: 'center',}}>Continuar </Text>
        </TouchableOpacity>

        <Text style={{padding:8}}>Ao criar uma conta, você concorda com os Termos de Serviços, os Termos de Serviços de Pagamentos, a Política de Não Discriminação e reconhece a Política de Privacidade.</Text>

        <TextInput
          style={{borderColor: 'gray',borderWidth: 1,borderRadius: 5,paddingHorizontal: 10,marginBottom: 20, padding:4}}
          placeholder="Reenviar Código"
          
        />
      </View>
      <InfoBottom/>
    </ScrollView>
    

  );
};