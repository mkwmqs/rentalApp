import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdPicturesInsertion/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdComponentContent, AdContent, AdPicture, Question } from '../advertisementDomains';
import { COMPONENT_PICTURE_SELECTOR, QUESTIONS_AD_PICTURES_INSERTION, SCREEN_AD_PICTURES_INSERTION } from '../advertisementParameters';
import { fetchAdComponentTextData, fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode } from '../adverstisementService';
import { PictureSelectorQuestion } from '../../../components/PictureSelectorQuestion';


export function AdPicturesInsertion() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [pictures, setPictures] = useState((route.params as any)?.pictures || []);
  const [answers, setAnswers] = useState((route.params as any)?.answers || {});
  const [adContents, setAdContents] = useState<AdContent[]>([]);
  const [componentContents, setComponentContents] = useState<AdComponentContent[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchApi = async() => {
      try{
        const questionsRemote = await fetchQuestionData([QUESTIONS_AD_PICTURES_INSERTION]);
        const textsRemote = await fetchAdTextData(SCREEN_AD_PICTURES_INSERTION);
        const componentContents = await fetchAdComponentTextData(COMPONENT_PICTURE_SELECTOR);
        setQuestions(questionsRemote);
        setAdContents(textsRemote);
        setComponentContents(componentContents);
        console.log(pictures);
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

  const updatePictures = (picture: AdPicture) => {
    setPictures((currentPictures) => {
      //Todo implement uploading service
      const index = currentPictures.findIndex(p => p.question === picture.questionCode && p.choice === picture.choiceCode);  
      if (index !== -1) {
        const updatedPictures = [...currentPictures];
        updatedPictures[index] = picture;
        return updatedPictures;
      } else {
        const updatedPictures = [...currentPictures, picture];
        return updatedPictures;
      }
    });
  };

  const questionObj = getQuestionByCode(questions, QUESTIONS_AD_PICTURES_INSERTION);
  const bodyQuestions = {...questionObj, choices: questionObj.choices.slice(1)};
  const headerQuestion = {...questionObj, choices: [questionObj.choices[0]]};

  return (
    <View style={styles.mainContainer}>

        <BackArrow/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>

            <PictureSelectorQuestion
              question={headerQuestion}
              onPictureSelection={updatePictures}
              adComponentContents={componentContents}
              shapeCustomStyle={styles.headerPicture}
              imageCustomStyle={styles.image}
              previousPictures={pictures}
            />

            <PictureSelectorQuestion
              question={bodyQuestions}
              onPictureSelection={updatePictures}
              adComponentContents={componentContents}
              previousPictures={pictures}
            />

            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_green}
                    onPress={() => navigation.navigate('AdProfileSecondStep', { answers: answers, pictures: pictures })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>





    </View>

  );
    
  
};
