
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,   } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { ColoredButton } from '../components/ColoredButton';
import color from '../styles/color';




export  const ProfileCard = () => {

  const handleVerification = () => {

    console.log('Obter Selo de Verificação');
  };

  const handleCreateProfile = () => {
    console.log('Criar Perfil');
  };

  return (
    


    <View style={styles.cardContainer}>
       <View style={styles.cardContainer}><Text style={styles.title}>Nome</Text><Text style={styles.subtitle}>Renter</Text></View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Informações Confirmadas de </Text>
        <Text style={styles.highlightText}>
          {"<Nome>"}</Text>
      </View>
      
      <Text><Icon name="check" size={20} color="#000000" /> Número de telefone</Text>
      <View style={styles.line} />
      
      <Text style={styles.infoText}>Verificação de Identidade</Text>
      <Text>
        Mostre aos outros que você é quem afirma ser com selo de verificação de identidade.
      </Text>

      <ColoredButton color={color.grey} title='Ober Selo'/>
      <Text style={styles.profileMessage}>
        Está na hora de criar seu perfil. 
      </Text>

     <Text>Seu perfil do Ubiner é uma parte importante de cada Locação. Crie o seu para ajudar outros Hosters e Renters a conhecer você melhor.</Text>
      <TouchableOpacity onPress={handleCreateProfile} style={styles.button}>
        <Text style={styles.buttonText}>Criar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};



  

  
  
  



