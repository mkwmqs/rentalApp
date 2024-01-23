import { View, Text, Icon, InfoIcon, Button, Image } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import color from '../../styles/color';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function SignIn() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  function handleReturn() {
    navigation.navigate('Welcome')
  }
  const icon = require('../../../assets/ubinnerIcon.png')
  return (
    <View mt='16' ml='8'>
      <TouchableOpacity onPress={handleReturn}>
        <Icon as={FontAwesome} name='arrow-left' color={color.texting} />
      </TouchableOpacity>
     
      <View>
        <Image source={{ uri: icon}} alt="icone da ubinner" width={500} height={500}/>
      </View>
    </View>
  )
}