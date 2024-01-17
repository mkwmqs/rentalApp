import React, { useState } from 'react';
import { View,  StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { ColoredButton } from '../components/ColoredButton';
import { Text, Avatar, VStack, Divider, NativeBaseProvider } from 'native-base';
import { AvatarCard } from '../components/AvatarCard';
import { CardInform } from '../components/CardInform';





export const ProfileInformation = () => {

  const [indentification, setIndentification] = useState(true) 
  const [cpf, setCpf] = useState(true) 
  const [email, setEmail] = useState(true) 
  const [fone, setFone] = useState(false) 
  const [creditCard, setCreditcard] = useState(false) 
  const [address, setAddress] = useState(false) 



  return (

    
    <ScrollView>
      <View style={styles.container}>
        <AvatarCard />

        <Text style={styles.title}>Informações Confirmadas</Text>

        <View style={styles.section}>
         {!indentification ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Documento de identificação</Text>
        </View>

        <View style={styles.section}>
        {!cpf ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>CPF</Text>
        </View>

        <View style={styles.section}>
        {!email ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>E-mail</Text>
        </View>

        <View style={styles.section}>
        {!fone ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Número de telefone</Text>
        </View>

        <View style={styles.section}>
        {!address ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Endereço</Text>
        </View>

        <View style={styles.section}>
        {!creditCard ? <Text style={styles.confirmIcon}>x</Text>:<Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Cartão de crédito cadastrado</Text>
        </View>
      </View>

      <View style={styles.line}/>

      <Text style={styles.title}>Vamos completar o seu perfil</Text>
      <Text style={styles.fim}>
        Seu perfil do Ubiner é uma parte importante de cada compartilhamento. Crie o seu para ajudar outros Hosters e Renters a conhecer você melhor.
      </Text>

      <ColoredButton color='#63E1FD' title='Completar Perfil'/>
    </ScrollView>
  );
};




