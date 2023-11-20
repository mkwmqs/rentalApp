import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { InfoBottom } from '../../components/InfoBottom';
import { styles } from './styles';
import { CheckBox } from 'react-native-elements';

export function CreateUser() {
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>()
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  function handleReturnScreen() {
    navigator.navigate('Welcome')
  }
  function handleCheckboxToggle() {
    setIsChecked(!isChecked)
  }
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <Icon style={{ paddingLeft: 24 }} name="arrow-left" size={18} onPress={handleReturnScreen} />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}

          style={styles.content}>
          <Text style={styles.header}>
            Criar conta
          </Text>
          <View style={styles.formWrapper}>
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu nome completo'
            />
            <Text style={styles.text}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu telefone'
            />
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder='Ex. 01/10/2023'
            />
            <Text style={styles.text}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu E-mai'
            />
            <Text style={styles.text}>Crie sua senha</Text>
            <TextInput
              style={[styles.input, { marginBottom: 0 }]}
              placeholder="Digite sua senha ubinner"
              secureTextEntry={!isChecked}
            />

            <CheckBox
              title="Mostrar senha"
              checked={isChecked}
              onPress={handleCheckboxToggle}
              containerStyle={styles.checkboxContainer}
            />


          </View>
        </ScrollView>

      </KeyboardAvoidingView>
      {isKeyboardOpen ? null : <InfoBottom />}
    </>
  )
}