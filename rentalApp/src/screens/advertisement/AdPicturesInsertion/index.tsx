import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdPicturesInsertion/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdContent, Question } from '../advertisementDomains';
import { QUESTIONS_AD_PICTURES_INSERTION, SCREEN_AD_PICTURES_INSERTION } from '../advertisementParameters';
import { fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode } from '../adverstisementService';
import { PictureSelectorQuestion } from '../../../components/PictureSelectorQuestion';




export function AdPicturesInsertion() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState((route.params as any)?.answers || {});
  const [adContents, setAdContents] = useState<AdContent[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchApi = async() => {
      try{
        const questionsRemote = await fetchQuestionData([QUESTIONS_AD_PICTURES_INSERTION]);
        const textsRemote = await fetchAdTextData(SCREEN_AD_PICTURES_INSERTION);
        setQuestions(questionsRemote);
        setAdContents(textsRemote);
      } catch(error){
        console.error(error.message);
      } finally {
        setLoading(false)
      }};
      fetchApi();
  }, []);

  if(loading){
      return null;
  }

  const addAnswer = (questionCode: number, answerCode: string) => {
    setAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionCode]: [answerCode],
    }));
  };

  const handleSelectedAnswer = (questionCode: number, answerCode: string) => {
    addAnswer(questionCode , answerCode);
  };



  return (
    <View style={styles.mainContainer}>

        <BackArrow/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>

            <PictureSelectorQuestion
              question={getQuestionByCode(questions, QUESTIONS_AD_PICTURES_INSERTION)}
              onAnswerSelected={handleSelectedAnswer}
              adContents={adContents}
            />

           <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
