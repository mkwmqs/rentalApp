import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdAddOns/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MultipleTextedSquareQuestion } from '../../../components/MultipleTextedSquareQuestion';
import { AdContent, Question } from '../advertisementDomains';
import { fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode } from '../adverstisementService';
import { QUESTIONS_ADD_ONS, SCREEN_AD_ADD_ONS } from '../advertisementParameters';


export function AdAddOns() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchApi = async() => {
        try{
          const questionsRemote = await fetchQuestionData([QUESTIONS_ADD_ONS]);
          const textsRemote = await fetchAdTextData(SCREEN_AD_ADD_ONS);
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

    const addAnswer = (questionCode: number, answerCode: string[]) => {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionCode]: answerCode,
      }));
    };
  

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            <Text style={styles.disclaimer}>{getAdTextByCode(adContents, 2)}</Text>

            <MultipleTextedSquareQuestion question={getQuestionByCode(questions, QUESTIONS_ADD_ONS)}
                onAnswerSelected={addAnswer} />

            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdPicturesIntroduction', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
