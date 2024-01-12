import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { ColoredButton } from '../components/ColoredButton';


export const ProfileInformation = () => {
  const AvatarCard = () => {
    return (
      <View style={styles.card}>
          <Text style={styles.sectionHeader}>Nome</Text>
          <Text>Renter</Text>
        <Image
          style={styles.avatar}
          source={{ uri: '' }}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AvatarCard />

        <Text style={styles.title}>Informações Confirmadas</Text>

        <View style={styles.section}>
          <Text style={styles.confirmIcon}>x</Text>
          <Text style={styles.info}>Documento de identificação</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.confirmIcon}>x</Text>
          <Text style={styles.info}>CPF</Text>
        </View>

        <View style={styles.section}>
          <Icon name="check" style={styles.confirmIcons} />
          <Text style={styles.info}>E-mail</Text>
        </View>

        <View style={styles.section}>
          <Icon name="check" style={styles.confirmIcons} />
          <Text style={styles.info}>Número de telefone</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.confirmIcon}>x</Text>
          <Text style={styles.info}>Endereço</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.confirmIcon}>x</Text>
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




