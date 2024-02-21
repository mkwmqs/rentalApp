import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdAddOns/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextedSquare from '../../../components/TextedSquare';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';


export function AdAddOns() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});

    const addAnswer = (questionCode: string, answerCode: boolean) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionCode]: answerCode,
        }));
    };

    const handleSelectedAnswer = (questionCode: string, answerCode: boolean) => {
        addAnswer(questionCode, answerCode);
      };

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>
                Quanto mais serviços você oferecer aos Renters, mais pessoas você conquistará e mais dinheiro você irá ganhar.
            </Text>
            <Text style={styles.disclaimer}>
                Você poderá selecionar mais de um serviço relacionados a seguir.
            </Text>

            <View style={styles.addOnsContainer}>
                <View style={styles.addOnsRow}>
                    <TextedSquare questionCode='401' 
                        onPress={handleSelectedAnswer}
                        text='Entrega em local diferente' 
                        shapeCustomStyle={styles.addOnFirstColumn}/>
                    <TextedSquare questionCode='402'
                        onPress={handleSelectedAnswer}
                        text='Certificado de inspeção' />
                </View>
                <View style={styles.addOnsRow}>
                    <TextedSquare questionCode='403'
                        onPress={handleSelectedAnswer}
                        text='Bebê conforto' shapeCustomStyle={styles.addOnFirstColumn} />
                    <TextedSquare questionCode='404'
                        onPress={handleSelectedAnswer}
                        text='Assento de elevação' />
                </View>
                <View style={styles.addOnsRow}>
                    <TextedSquare questionCode='405'
                        onPress={handleSelectedAnswer}
                        text='Cadeirinha para criança' shapeCustomStyle={styles.addOnFirstColumn}/>
                    <TextedSquare questionCode='406'
                        onPress={handleSelectedAnswer}
                        text='Controle remoto do carro' />
                </View>
                <View style={styles.addOnsRow}>
                    <TextedSquare questionCode='407'
                        onPress={handleSelectedAnswer}
                        text='Alarme de segurança' shapeCustomStyle={styles.addOnFirstColumn}/>
                    <TextedSquare questionCode='408'
                        onPress={handleSelectedAnswer}
                        text='Localizador' />
                </View>

            </View>

            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={'Continuar'} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdPicturesIntroduction', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
