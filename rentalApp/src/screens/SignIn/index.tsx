import { View, Text, Icon, InfoIcon, Button, Center } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import color from '../../styles/color';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ColoredButton } from '../../components/ColoredButton';

export function SignIn() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  function handleReturn() {
    navigation.navigate('Welcome')
  }

  return (
    <>
      <View mt='16' ml='8'>
        <TouchableOpacity onPress={handleReturn}>
          <Icon as={FontAwesome} name='arrow-left' color={color.texting} />
        </TouchableOpacity>
      </View>

      <Center mt='12'>
        <Image source={require('../../../assets/ubinnerIcon.png')} alt="icone da ubinner" width={300} height={300} />
      </Center>
      <View mt='8' ml='8'>
        <Text color={color.texting} fontSize='lg' fontWeight={'bold'}>Bem-vindo(a) a Bibipe</Text>
      </View>

      <View mt='8' p='4'>
        <ColoredButton color={color.grey} title='Crie sua conta' />
      </View>

      <View pt='2' pl='4' pr='4'>
        <ColoredButton color={color.light_blue} title='Já tenho uma conta' />
      </View>
    </>
  )
}