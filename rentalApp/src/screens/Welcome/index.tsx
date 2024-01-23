import { ParamListBase, useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react';
import { Text, View } from 'react-native';

import { ColoredButton } from '../../components/ColoredButton';
import { InfoBottom } from '../../components/InfoBottom';
import color from '../../styles/color';
import { styles } from './styles';

export function Welcome() {
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();
  function handleCreateUser(): void {
    navigator.navigate('CreateUser')
  }
  function handleLoginUser(){
    navigator.navigate("SignIn")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Bem-vindo(a)</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonWrapper}>
          <ColoredButton
            title='Crie sua conta'
            color={color.grey}
            onPress={handleCreateUser}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ColoredButton 
          title='Login já sou cliente' 
          color={color.light_blue} 
          onPress={handleLoginUser}
          />
        </View>
      </View>

      <InfoBottom />

    </View>
  )
}