import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './styles';


export const ProfileVerification = () => {

  const Verification = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos adicionar seus documentos de identificação</Text>
      <Text style={styles.description}>
      Isso nos ajuda a confirmar que você é quem afirma ser. A verificação de identidade é uma das maneiras que usamos para manter o Ubiner seguro.
      </Text>

      <Text style={styles.title}>Como funciona a verificação de indentidade</Text>

      <View  style={styles.card}>
          
        <Image
          style={styles.avatar}
          source={{ uri: 'https://img.freepik.com/vetores-gratis/mao-segurando-o-conceito-de-telefone-celular-smartphone-ilustracao-de-arte-de-desenho-animado-desenhada-a-mao_56104-1117.jpg?w=900&t=st=1704915460~exp=1704916060~hmac=3788353ddd6aea5619d6c9022b889b8f5b20bb258b612e4453bebb55857722dd' }}
        />
      </View>

      <View  style={styles.cards}><Text>Seu documento de identificação será processado de acordo com nossa Politica de Privacidade e não será compartilhado com seu Hoster ou Renter.</Text>
      </View>
    
        <TouchableOpacity style={styles.button} onPress={Verification}>
          <Text style={styles.buttonText}>Adicionar Documentos de Identificação</Text>
        </TouchableOpacity>
      
    </View>
  );
};