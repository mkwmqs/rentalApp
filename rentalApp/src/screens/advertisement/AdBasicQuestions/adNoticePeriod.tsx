import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdBasicQuestions/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SingleChoiceQuestion} from '../../../components/SingleChoiceQuestion';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';

type Answers = {
    [questionCode: string]: string;
  };
  

export function AdNoticePeriod() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});

    const addAnswer = (questionCode: string, answerCode: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionCode]: answerCode,
        }));
    };

    const handleSelectedAnswer = (questionCode: string, answerCode: string) => {
        addAnswer(questionCode, answerCode);
      };

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <SingleChoiceQuestion style={styles.questionsSection}
                questionCode='201'
                question={'Aviso Prévio'}
                disclaimer={'Você poderá selecionar qual a antecedência que precisa para ser lembrado antes do início do compartilhamento'}
                choices={['1 hora', 
                            '2 horas', 
                            '3 horas (recomendado)',
                            '6 horas',
                            '12 horas',
                            '1 dia']}
                answersCodes={['a', 'b', 'c', 'd', 'e', 'f']}
                onAnswerSelected={handleSelectedAnswer}
            />

    {/*************** MKW - APAGAR - Teste em tela ************/}
    <View style={{borderColor: 'black', borderWidth: 1}}>
        <Text style={{color: '#C30010'}}>[mkw] Quadro para mero teste. Apagar depois!</Text>
      {Object.entries(answers).map(([questionCode, answerCode]) => (
        <Text key={questionCode} style={{color: '#C30010'}}>
          Question: {questionCode}, Answer: {answers[questionCode]}
        </Text> 
      ))}
    </View>
     {/*************** MKW - APAGAR - Teste em tela - Fim *****/}



            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={'Continuar'} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdRentalLength', { answers: answers })}

                    />
            </View>

        </ScrollView>

        <NavBottom/>


    </View>

  );
    
  
};
