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
import { QUESTION_NOTICE_PERIOD, SCREEN_AD_NOTICE_PERIOD } from '../advertisementParameters';
import { AdContent, Question } from '../advertisementDomains';
import { fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode } from '../adverstisementService';

type Answers = {
    [questionCode: string]: string;
  };
  

export function AdNoticePeriod() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState((route.params as any)?.answers || {});
  const [adContents, setAdContents] = useState<AdContent[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchApi = async() => {
      try{
        const questionsRemote = await fetchQuestionData([QUESTION_NOTICE_PERIOD]);
        const textsRemote = await fetchAdTextData(SCREEN_AD_NOTICE_PERIOD);
        setQuestions(questionsRemote);
        setAdContents(textsRemote);
      } catch(error){
        console.error(error.message);
      } finally {
        setLoading(false)
      }};
      fetchApi();
  }, []);


    const addAnswer = (questionCode: number, answerCode: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionCode]: [answerCode],
        }));
    };

    const handleSelectedAnswer = (questionCode: number, answerCode: string) => {
        addAnswer(questionCode, answerCode);
      };

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <SingleChoiceQuestion style={styles.questionsSection}
                question={getQuestionByCode(questions, QUESTION_NOTICE_PERIOD)}
                onAnswerSelected={handleSelectedAnswer} isDoubleSpaced={true}
            />


            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_green}
                    onPress={() => navigation.navigate('AdIntendedLength', { answers: answers })}

                    />
            </View>

        </ScrollView>

        <NavBottom/>


    </View>

  );
    
  
};
