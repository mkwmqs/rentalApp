import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';
import { FullWidthImage } from '../../../components/FullWidthImage';
import { styles } from './styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchAdTextData } from '../adverstisementService';
import { SCREEN_AD_COVER } from '../advertisementParameters';
import { AdContent } from '../advertisementDomains';
import { getAdTextByCode, getAdImageByCode } from '../adverstisementService';
import { BackArrow } from '../../../components/BackArrow';

interface textedImageProps {
    obj: {
      image: ImageSourcePropType,
      description?: string,
      heightRatio?: number
    }
  }
  

export default function AdCover() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(true);
  const [adContents, setAdContents] = useState<AdContent[]>([]);
  const [answers, setAnswers] = useState((route.params as any)?.answers || {});

  useEffect(() => {
    const fetchApi = async() => {
      try{
        const contentsRemote = await fetchAdTextData(SCREEN_AD_COVER);
        setAdContents(contentsRemote);
      } catch(error){
        console.error(error.message);
      } finally {
        setLoading(false)
      }};
      fetchApi();
      
  }, []);
    
    
    const objImagem = {
      image: getAdImageByCode(adContents, 1),
      heightRatio: 0.72,
      description: getAdTextByCode(adContents, 2)
    };

  return (
    <View style={styles.mainContainer}>
      <BackArrow isScreenWithoutTopBorder={true}/>
       
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <FullWidthImage obj={objImagem} />   
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.header}>{getAdTextByCode(adContents, 3)}</Text>
                <Text style={styles.descriptor}>{getAdTextByCode(adContents, 4)}</Text>

                <View style={styles.forwardButton}>
                  <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdBehaviourQuestions',  {answers: answers })}
                  />
                </View>

            </View>
        </ScrollView>
        <NavBottom/>
        
    </View>
        
   
  );
};



