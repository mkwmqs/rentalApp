import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { ColoredButton } from '../../components/ColoredButton';
import { InfoBottom } from '../../components/InfoBottom';
import color from '../../styles/color';
import { styles } from './styles';

export function Welcome() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Bem-vindo(a)</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonWrapper}>
        <ColoredButton  title='Crie sua conta' color={color.grey} />
        </View>
        <View style={styles.buttonWrapper}>
        <ColoredButton title='Login já sou cliente' color={color.light_blue} />
        </View>
      </View>
  
      <InfoBottom/>
  
    </View>
  )
}