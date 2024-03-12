import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdBasicQuestions/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';
import { AdContent, Question } from '../advertisementDomains';
import { QUESTION_INTENDED_RENTAL_FREQUENCY, QUESTION_OWNER_USAGE_FREQUENCY, QUESTION_RENTAL_MOTIVATION, SCREEN_AD_BEHAVIOUR_QUESTIONS } from '../advertisementParameters';
import { fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode } from '../adverstisementService';
import AdCover from '../AdCover';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';

type Answers = {
  [questionCode: string]: string;
};


export function AdBehaviourQuestions()  {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState((route.params as any)?.answers || {});
  const [adContents, setAdContents] = useState<AdContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async() => {
      try{
        const questionsRemote = await fetchQuestionData([QUESTION_OWNER_USAGE_FREQUENCY,
                 QUESTION_RENTAL_MOTIVATION, QUESTION_INTENDED_RENTAL_FREQUENCY]);
        const textsRemote = await fetchAdTextData(SCREEN_AD_BEHAVIOUR_QUESTIONS);
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
                question={getQuestionByCode(questions, QUESTION_RENTAL_MOTIVATION)}
                onAnswerSelected={handleSelectedAnswer}
            />
            <StraightLineSeparator/>

            <SingleChoiceQuestion style={styles.questionsSection}
                question={getQuestionByCode(questions, QUESTION_OWNER_USAGE_FREQUENCY)}
                onAnswerSelected={handleSelectedAnswer}
            />
            <StraightLineSeparator/>

            <SingleChoiceQuestion style={styles.questionsSection}
                question={getQuestionByCode(questions, QUESTION_INTENDED_RENTAL_FREQUENCY)}
                onAnswerSelected={handleSelectedAnswer}
            />


            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdNoticePeriod', { answers: answers })}
                />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>
  );
};
