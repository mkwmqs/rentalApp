import { ScrollView } from 'native-base';
import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FullWidthImage } from '../../../components/FullWidthImage';
import adIntroductionImage from '../../../../assets/ad-img-introduction.png';
import { styles } from '../AdIntroduction/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { useNavigation } from '@react-navigation/native';
import { EnumeratedLineItem } from '../../../components/EnumeratedLineItem';


interface textedImageProps {
    obj: {
      image: any,
      description?: string,
      heightRatio?: number
    }
  }
  

export default function AdIntroduction() {
  
  const navigation = useNavigation<any>();

  const objImagem = {
    image: adIntroductionImage,
    heightRatio: 0.61,
  };

  const handlePress = () => {};
  return (

    <View style={{flex:1}}>
       
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <FullWidthImage obj={objImagem} />   
            </View>

            <View style={styles.bodyContainer}>

                <Text style={styles.header}>
                    Seja um Hoster você também
                </Text>
                <Text style={styles.subtitle}>
                    Junte-se aos nossos anfitriões que podem ganhar mais de R$ 11.000* por mês por carro na Bibipi.
                </Text>

                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>4 motivos para você se juntar a nós</Text> 
                    <EnumeratedLineItem text={'Gerar uma nova receita'}/>
                    <EnumeratedLineItem text={'Ajudar a cobrir as despesas do meu veículo'}/>
                    <EnumeratedLineItem text={'Criar uma frota de veículos para aluguel'}/>
                    <EnumeratedLineItem text={'Ajudar a pagar o financiamento do meu veículo'}/>
                </View>

                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>Como funciona?</Text> 
                    <Text style={styles.singleParagraph}>
                        Grátis para expor o seu veículo e você pode definir o preço, disponibilidade
                            e regras. Fácil de usar e você recebe em até 30 dias após o compartilhamento. 
                            Estamos aqui para lhe ajudar a ter uma ótima experiência.
                    </Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.getAwareLink}>
                            Saiba mais
                        </Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <Text style={styles.bottomParagraph}>
                        *Este valor é uma projeção para um veículo compartilhado por 22 dais por mês, com uma diária de R$ 500,00,
                        para um veículo avaliado em R$ 180.000,00.
                    </Text>
                    <Text style={styles.bottomParagraph}>
                        Neste compartilhamento estão inclusos:
                    </Text>
                    <EnumeratedLineItem text={'Seguro parao veículo'} 
                        customStyles={{containerStyle:{marginTop: 0}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={'Cobertura para terceiros'}
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={'Taxa de Compartilhamento'} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={'Taxa de limpeza'} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={'Taxa de devolução'} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={'Motorista adicional'} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                

                </View>


                <View style={{marginBottom: 160}}></View>


            </View>


        </ScrollView>
        <NavBottom/>
        
    </View>
        
   
  );
};



