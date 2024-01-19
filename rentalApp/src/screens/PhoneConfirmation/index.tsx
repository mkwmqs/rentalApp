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
      <View style={styles.contentLine}>
        <Text style={[styles.header, { fontSize: 16 }]}>BR +55 {phone} </Text>
        <TouchableOpacity onPress={handleChangePhone} >
          <Text style={styles.linkChange}>(Alterar)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text>Insira o codigo</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={handleCodeChange} />
        <ColoredButton color={color.light_blue} title='Continuar' />

      </View>
      <View style={styles.form}>
        <ColoredButton color='#0003' title='Reenviar codigo' onPress={handleReSendCode} />
      </View>
      <InfoBottom />
    </KeyboardAvoidingView>
  )
}