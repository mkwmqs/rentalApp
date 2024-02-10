import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AvatarCard } from '../../components/AvatarCard';
import { ColoredButton } from '../../components/ColoredButton';
import { styles } from './styles';
import color from '../../styles/color';
import { NavBottom } from '../../components/NavBottom';






export const ProfileInformation = () => {

  const [indentification, setIndentification] = useState(true)
  const [cpf, setCpf] = useState(true)
  const [email, setEmail] = useState(true)
  const [fone, setFone] = useState(true)
  const [creditCard, setCreditcard] = useState(true)
  const [address, setAddress] = useState(true)


  return (

<>
    <ScrollView>
      <View style={styles.container}>
        <AvatarCard />
<View></View>
        <Text style={styles.title}>Informações Confirmadas</Text>

        <View style={styles.section}>
          {!indentification ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Documento de identificação</Text>
        </View>

        <View style={styles.section}>
          {!cpf ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>CPF</Text>
        </View>

        <View style={styles.section}>
          {!email ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>E-mail</Text>
        </View>

        <View style={styles.section}>
          {!fone ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Número de telefone</Text>
        </View>

        <View style={styles.section}>
          {!address ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Endereço</Text>
        </View>

        <View style={styles.section}>
          {!creditCard ? <Text style={styles.confirmIcon}>x</Text> : <Icon name="check" style={styles.confirmIcons} />}
          <Text style={styles.info}>Cartão de crédito cadastrado</Text>
        </View>
      </View>

      <View style={styles.line} />

      <Text style={styles.title}>Vamos completar o seu perfil</Text>
      <Text style={styles.fim}>
        Seu perfil do Ubiner é uma parte importante de cada compartilhamento. Crie o seu para ajudar outros Hosters e Renters a conhecer você melhor.
      </Text>
      <View style={{paddingHorizontal:20, margin:10, padding:15}}>
        <ColoredButton color={color.green} title='Completar Perfil' />
      </View>
    </ScrollView>
    <NavBottom/>
    </>
  );
};




