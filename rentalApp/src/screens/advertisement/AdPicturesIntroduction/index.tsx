import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdPicturesIntroduction/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';


export function AdPicturesIntroduction() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>
                Juntos Vamos Produzir as Melhores Fotos do Seu Veículo
            </Text>
            <Text style={styles.description}>
                Este passo é muito importante. A qualidade das fotos que vamos tirar será fundamental para conquistarmos novos Renters para o seu veículo.
            </Text>
            <Text style={styles.description}>
                Depois de muitos estudos nós vamos te guiar para que você obtenha os melhores ângulos com as melhores posições para que a sua foto seja um sucesso.
            </Text>
            <Text style={styles.description}>
                Para te ajudar na próxima tela iremos te mostrar como as suas fotos devem ficar em todo o processo de tirar as fotos.
            </Text>

        </ScrollView>

           <View style={styles.forwardButton}>
                <ColoredButton 
                    title={'Continuar'} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdPicturesInsertion', { answers: answers })}

                    />
            </View>
        <NavBottom/>
    </View>

  );
    
  
};
