import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';
import { InfoBottom } from '../../components/InfoBottom';

interface PhoneConfirmationProps {
  route: RouteProp<any>;
}

function handleReSendCode() {
  alert('codigo reenviado')
}


export function PhoneConfirmation({ route }: PhoneConfirmationProps) {
  const phone = route.params?.formData
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();

  const [code, setCode] = useState('')

  function handleChangePhone() {
    navigator.navigate('CreateUser')
  }

  function handleCodeChange(data: string) {
    setCode(data)
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.header}>Verificar o número do telefone celular </Text>
      <Text style={{padding:4, margin:4}}>Enviamos um WhatsApp com um código de verificação para o número de celular acima.</Text>
      <View style={styles.contentLine}>
        <Text style={[styles.header, { fontSize: 16 }]}>BR +55 {phone} </Text>
        <TouchableOpacity onPress={handleChangePhone} >
          <Text style={styles.linkChange}>(Alterar)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={{fontWeight: 'bold', margin:4}}>Insira o código</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={handleCodeChange} />
        <ColoredButton color={color.light_blue} title='Continuar' />

      </View>
      <Text style={{padding:4, margin:4}}>Ao criar uma conta, você concorda com os Termos de Serviços, os Termos de Serviços de Pagamentos, 
          a Política de Não Discriminação e reconhece a Política de Privacidade.</Text>
      <View style={styles.form}>
        
        <ColoredButton color='#0003' title='Reenviar código' onPress={handleReSendCode} />
      </View>
      <InfoBottom />
    </KeyboardAvoidingView>
  )
}