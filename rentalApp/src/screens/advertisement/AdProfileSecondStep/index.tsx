import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../AdProfileSecondStep/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREEN_AD_PROFILE_SECOND_STEP } from '../advertisementParameters';
import { AdContent, Question } from '../advertisementDomains';
import { fetchAdTextData, getAdImageByCode, getAdTextByCode } from '../adverstisementService';
import { FullWidthImage } from '../../../components/FullWidthImage';


export function AdProfileSecondStep() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const contentesRemote = await fetchAdTextData(SCREEN_AD_PROFILE_SECOND_STEP);
                setAdContents(contentesRemote);
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

    const objImage = {
        image: getAdImageByCode(adContents, 11),
        heightRatio: 0.606
    };

  return (

    
    <View style={styles.mainContainer}>
        <BackArrow screen='AdPicturesInsertion'/>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.stepHeader}>{getAdTextByCode(adContents, 1)}</Text>
            <FullWidthImage obj={objImage}/>

            
            <View style={styles.body}>

                <Text style={styles.header}>{getAdTextByCode(adContents, 20)}</Text>
                <Text style={styles.textBody}>{getAdTextByCode(adContents, 21)}</Text>

                <View style={styles.forwardButton}>
                    <ColoredButton 
                        title={getAdTextByCode(adContents, 100)} 
                        color={color.light_green}
                        onPress={() => navigation.navigate('AdFareEstimation', { answers: answers })}
                        />
                </View>
            </View>

        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
