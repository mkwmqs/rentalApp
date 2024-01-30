import { View, Text, Icon, Button } from 'native-base'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import color from '../../styles/color';
import { ColoredButton } from '../../components/ColoredButton';
import { InfoBottom } from '../../components/InfoBottom';
import { NavBottom } from '../../components/NavBottom';

export function Welcome() {
  return (
    <>
      <View mt='12' ml='8'>
        <TouchableOpacity>
          <Icon as={FontAwesome} name='arrow-left' color={color.texting} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
        <Image
          source={require('../../../assets/bibipi.png')}
          alt="icone da Bibipi"
          style={{ width: 100, height: 100, borderRadius: 150 }}
        />
      </View>

      <View mt='8' ml='8'>
        <Text color={color.texting} fontSize='lg' fontWeight={'bold'}>Bem-vindo(a) a Bibipi</Text>
      </View>

      <View mt='8' p='4'>
        <ColoredButton color={color.grey} title='Crie sua conta' />
      </View>

      <View pt='2' pl='4' pr='4'>
        <ColoredButton color={color.light_blue} title='Já tenho conta' />
      </View>

      <Text style={{ textAlign: 'center', padding: 8 }}>
        Ao selecionar Continuar, você aceita os Termos de Serviços, os Termos de Serviços de Pagamentos,
        a Política de Não Discriminação e reconhece a Política de Privacidade.
      </Text>

      <Text style={{ textAlign: 'center', marginTop: 8 }}>Precisa de ajuda?</Text>

      <View style={{ padding: 4, margin: 4 }}>
        <InfoBottom />
      </View>
      <NavBottom />
    </>
  )
}
