import { ScrollView } from 'native-base';
import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { FullWidthImage } from '../../../components/FullWidthImage';
import adCoverImage from '../../../../assets/ad-img-cover.png';
import { styles } from './styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { useNavigation } from '@react-navigation/native';


interface textedImageProps {
    obj: {
      image: any,
      description?: string,
      heightRatio?: number
    }
  }
  

export default function AdCover() {
  
  const navigation = useNavigation<any>();

  const objImagem = {
    image: adCoverImage,
    heightRatio: 0.72,
    description: 'Seu veículo está apto para ser compartilhado.'
  };


  return (
    <View style={{flex:1}}>
       
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <FullWidthImage obj={objImagem} />   
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.header}>
                    Valorize Seu Veículo
                </Text>
                <Text style={styles.descriptor}>
                    Adicione agora algumas características que o seu veículo possui. Nós criamos um passo a passo bem simples para te ajudar como seu veículo se destaque.
                </Text>

                <ColoredButton 
                  title={'Continuar'} 
                  color={color.light_blue}
                  onPress={() => navigation.navigate('AdBehaviourQuestions')}
                />

                <Text style={{color: '#C30010'}}>[mkw] Importante: Foi utilizado aqui o componente ColoredButton. Tamanho letra difere Figma. Avaliar qual utilizar para padronizar</Text>

            </View>
        </ScrollView>
        <NavBottom/>
        
    </View>
        
   
  );
};



