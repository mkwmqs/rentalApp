import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdPicturesIntroduction/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrow } from '../../../components/BackArrow';
import { AdContent } from '../advertisementDomains';
import { SCREEN_AD_PICTURES_INTRODUCTION } from '../advertisementParameters';
import { fetchAdTextData, getAdTextByCode } from '../adverstisementService';


export function AdPicturesIntroduction() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchApi = async() => {
        try{
          const textsRemote = await fetchAdTextData(SCREEN_AD_PICTURES_INTRODUCTION);
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

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            <Text style={styles.description}>{getAdTextByCode(adContents, 21)}</Text>
            <Text style={styles.description}>{getAdTextByCode(adContents, 22)}</Text>
            <Text style={styles.description}>{getAdTextByCode(adContents, 23)}</Text>
                

        </ScrollView>

           <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_green}
                    onPress={() => navigation.navigate('AdPicturesInsertion', { answers: answers })}

                    />
            </View>
        <NavBottom/>
    </View>

  );
    
  
};
