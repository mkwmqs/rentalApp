import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';

export function InfoBottom() {
  return (
    
    <View style={styles.container}>
      <View style={styles.horizontalLine} />
      <View style={styles.content}>
        <Text style={[styles.header,{paddingVertical:12}]}>Português(BR) {"   "} R$BRL</Text>
        <Text style={styles.text}>2023 Ubinner, Inc.</Text>
        <Text  style={styles.text}>Priacidade - Termos - Mapa do Site - Informações da empresa</Text>
      </View>
    </View>
  )
}