import React from 'react';
import {  Text, TouchableOpacity, Alert } from 'react-native';
import { InfoBottom } from '../../components/InfoBottom';
import { NavBottom } from '../../components/NavBottom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon, View } from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../styles/color';


export const Notification = () => {
    const navigator = useNavigation<StackNavigationProp<ParamListBase>>()
  const activerNotification = () => {
    
    Alert.alert('Notificações ativadas!');
  };

  const skipNotification = () => {
    
    Alert.alert('Notificações puladas.');
  };

  
  function handleReturnScreen() {
    navigator.navigate('CreateUser')
  }
  

  return (
<>
    <View mt='12' ml='8'>
    <TouchableOpacity>
      <Icon as={FontAwesome5Icon} name='arrow-left' color={color.texting} onPress={handleReturnScreen} />
    </TouchableOpacity>
  </View>
  
    <View style={{ flex: 1,  marginTop:'18%' , padding:4  }}>
        <Text style={{padding:10, margin:10, fontSize:18, alignItems: 'center',fontWeight:'bold'}}>Ativar Notificações?</Text>
      <Text style={{padding:10, margin:10, alignItems: 'center'}}>
        Não perca nenhuma novidade, mensagens importante, como notícias e
        reportagens do mundo automobilístico.
      </Text>
      <Text style={{padding:10, margin:10}}>Receba ofertas de locação, recomendações personalizadas e muito mais.</Text>

      <TouchableOpacity onPress={activerNotification} style={{ margin: 10, padding: 10, backgroundColor: 'green', borderRadius: 5, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Sim, notifique-me</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={skipNotification} style={{ margin: 10, padding: 10, backgroundColor: 'gray', borderRadius: 5, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Pular</Text>
      </TouchableOpacity>
      <InfoBottom/>
      <NavBottom/>
    </View>
    </>
  );
};
