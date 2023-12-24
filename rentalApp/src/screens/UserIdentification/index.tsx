import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import { Icon } from 'react-native-elements';

import { styles } from './styles';




export function UserIdentification() {
  const [region, setRegion] = useState('Brasil (+55)')
  const [phone, setPhone] = useState('')

 function handleUpperInputChange(value: string){
 
  if(value == null){
    setRegion('Brasil (+55)')
  }
  setRegion(value)
  }
  function handleBottomInputChange(value: string){

    setPhone(value)
    }
  return (

    <SafeAreaView>


      <View style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.text}>País/Região</Text>
          <TextInput 
          style={styles.upperInput} 
            onChangeText={(value) => handleUpperInputChange(value)}
          > 
          {region}  </TextInput>

        </View>
        <TextInput 
        style={styles.bottomInput}
        onChangeText={(value) => handleBottomInputChange(value)}
          placeholder="Número de telefone">

        </TextInput>

      </View>
      <View style={styles.info}>
        <Text style={styles.textInfo}>
          Enviaremos uma mensagem para você confirmando o seu número.
          Podem ser aplicadas padrões de dados de mensagens.
        </Text>

      </View>
      <View style={styles.coninue}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
        <View style={styles.dash} />
        <View>
          {/* <Text style={{ width: 50, textAlign: 'center',fontFamily:fonts.text }}> OU </Text> */}
        </View>
        <View style={styles.dash} />
      </View>
      <View style={styles.info}>
        {/* <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
        <Icon name="mail" type="feather" />
          <Text style={{ fontWeight:'bold',paddingLeft:'25%'}}>
           Continuar com email</Text>
    
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
          <Icon name="apple" type="font-awesome" />
          <Text style={{ fontWeight:'bold',paddingLeft:'25%'}}> Continuar com Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
        <Icon name="google" type="font-awesome" />
          <Text style={{ fontWeight:'bold',paddingLeft:'25%'}}> Continuar com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
        <Icon name="facebook" type="font-awesome" />
          <Text style={{ fontWeight:'bold',paddingLeft:'25%'}}> Continuar com Facebook</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
          <View style={styles.dash} />
        </View> */}
      </View>



    </SafeAreaView>

  )
}