import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdBasicQuestions/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { useNavigation } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';

type Answers = {
  [questionCode: string]: string;
};


export function AdBehaviourQuestions()  {
    const [answers, setAnswers] = useState({});    
    const navigation = useNavigation<any>();
  
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
                questionCode='101' 
                question={'Qual o seu interesse financeiro ao compartilhar o veículo na Bibipi?'}
                choices={['Ter uma renda primária', 
                            'Gerar uma renda extra', 
                            'Cobrir os gastos do seu veículo',
                            'Expandir um negócio']}
                answersCodes={['a', 'b', 'c', 'd']} // [mkw] alterar para valores do banco de dados ou algoritmo avaliador
                onAnswerSelected={handleSelectedAnswer}
            />

            <SingleChoiceQuestion style={styles.questionsSection}
                questionCode='102'
                question={'Qual a frequência que este veículo é utilizado por você ou sua família?'}
                choices={['Nunca', 
                            'Raramente, uma vez por semana ou menos', 
                            'Até 3 dias por semana',
                            'Até 6 dias por semana',
                            'Todos os dias']}
                answersCodes={['a', 'b', 'c', 'd', 'e']} // [mkw] alterar para valores do banco de dados ou algoritmo avaliador
                onAnswerSelected={handleSelectedAnswer}
            />

            <SingleChoiceQuestion style={styles.questionsSection}
                questionCode='103'
                question={'Qual a frequência que você deseja compartilhar o seu veículo?'}
                choices={['Ainda não sei', 
                            'Raramente, algumas vezes por mês', 
                            'Em torno de 15 dias por mês',
                            'Frequentemente, mais de 15 dias por mês',
                            'Sempre']}
                answersCodes={['a', 'b', 'c', 'd', 'e']} // [mkw] alterar para valores do banco de dados ou algoritmo avaliador
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
                    onPress={() => navigation.navigate('AdNoticePeriod', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>
  );
};
