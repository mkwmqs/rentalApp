import { View, Text, Icon, Button } from 'native-base'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import color from '../../styles/color';
import { ColoredButton } from '../../components/ColoredButton';
import { InfoBottom } from '../../components/InfoBottom';
import { NavBottom } from '../../components/NavBottom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function Welcome() {

  const navigator = useNavigation<StackNavigationProp<ParamListBase>>()
  function handlerCreatUser(){
    navigator.navigate('CreateUser');
  }

  const newNavigator = useNavigation<StackNavigationProp<ParamListBase>>();
function handlerSignIn() {
  newNavigator.navigate('SignIn');
}
  return (
    <>

      <View mt='12' ml='8'>
        <TouchableOpacity>
          <Icon as={FontAwesome} name='arrow-left' color={color.texting} />
        </TouchableOpacity>
      </View>

      <View style={{  justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
        <Image
          source={require('../../../assets/bibipi.png')}
          alt="icone da Bibipi"
          style={{ width: 100, height: 100, borderRadius: 150 }}
        />
      </View>

      <View mt='8' ml='8'>
        <Text color={color.texting} fontSize='lg' fontWeight={'bold'}>Bem-vindo(a) a Bibipi</Text>
      </View>
        
      <View mx={4} my='4' p='4'>
        
        <ColoredButton  color={color.grey} title='Crie sua conta' onPress={handlerCreatUser} />
      </View>

      <View mx={4} pl='4' pr='4'>
        <ColoredButton color={color.green} title='Já tenho conta' onPress={handlerSignIn} />
      </View>

      <Text style={{ marginTop: 4,textAlign: 'center', padding: 8 }}>
        Ao selecionar Continuar, você aceita os Termos de Serviços, os Termos de Serviços de Pagamentos,
        a Política de Não Discriminação e reconhece a Política de Privacidade.
      </Text>
      <TouchableOpacity>
      <Text style={{ textAlign: 'center', marginTop: 8 }}>Precisa de ajuda?</Text>
      </TouchableOpacity>

      <View style={{ padding: 4, margin: 4 }}>
        <InfoBottom />
      </View>
      <NavBottom />
    </>
  )
}

