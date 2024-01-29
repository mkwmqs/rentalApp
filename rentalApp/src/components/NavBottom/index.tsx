import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Image } from 'native-base';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function NavBottom() {
  const img = require('../../../assets/ubinnerIcon.png')
  return (
    <View style={styles.container}>
      <View style={styles.bottomFixed}>
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.iconItem}>
            <Icon as={Ionicons} name='search' size={8} />
            <Text>Explorar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Icon as={Ionicons} name='heart-outline' size={8} />
            <Text>Favorito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Image
              source={img}
              width={8}
              height={8}
              alt='Locação'
            />
            <Text>Locação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Icon as={Ionicons} name='chatbox-outline' size={8} />
            <Text>Mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Icon as={Ionicons} name='person-circle-outline' size={8} />
            <Text>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}