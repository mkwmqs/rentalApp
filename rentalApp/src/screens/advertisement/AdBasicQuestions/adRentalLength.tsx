import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdBasicQuestions/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';



export function AdRentalLength() {
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
                questionCode='301'
                question={'Duração mínima do compartilhamento'}
                disclaimer={'Você poderá selecionar da quantidade mínima de dias para compartilhar o seu veículo'}
                choices={['1 dia', 
                            '2 dias', 
                            '3 dias',
                            '5 dias',
                            '1 dia de domingo a quinta e 2 dias na sexta ou sábado.']}
                answersCodes={['a', 'b', 'c', 'd', 'e']}
                onAnswerSelected={handleSelectedAnswer}
            />


            <SingleChoiceQuestion style={styles.questionsSection}
                questionCode='302'
                question={'Duração máxima do compartilhamento'}
                disclaimer={'Você poderá selecionar da quantidade máxima de dias para compartilhar o seu veículo'}
                choices={['5 dias', 
                            '1 semana', 
                            '2 semanas',
                            '1 mês',
                            '3 meses',
                            'Sem restrição']}
                answersCodes={['a', 'b', 'c', 'd', 'e', 'f']}
                onAnswerSelected={handleSelectedAnswer}
            />


    {/*************** MKW - APAGAR - Teste em tela - Início *****/}
    <View style={{borderColor: 'black', borderWidth: 1}}>
        <Text style={{color: '#C30010'}}>[mkw] Quadro para testar o objeto a persistir no DB. Apagar depois!</Text>
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
                    onPress={() => navigation.navigate('AdAddOns', { answers: answers })}

                    />
            </View>

        </ScrollView>

        <NavBottom/>


    </View>

  );
    
  
};