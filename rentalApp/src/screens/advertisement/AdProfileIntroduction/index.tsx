import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../AdProfileIntroduction/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SingleChoiceHorizontalImage } from '../../../components/SingleChoiceHorizontalImage';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { CURRENCY_DISPLAY, QUESTION_RENTAL_FREQUENCY, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_VEHICLE_COST, SCREEN_AD_PROFILE_INTRODUCTION, SCREEN_AD_SIMULATION } from '../advertisementParameters';
import { AdContent, Question } from '../advertisementDomains';
import { fetchAdTextData, getAdImageByCode, getAdTextByCode } from '../adverstisementService';
import { IlustratedSectionText } from '../../../components/IlustratedSectionText';


export function AdProfileIntroduction() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const textsRemote = await fetchAdTextData(SCREEN_AD_PROFILE_INTRODUCTION);
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
        <BackArrow screen='AdSimulation'/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            <Text style={styles.subtitle}>{getAdTextByCode(adContents, 2)}</Text>

            <IlustratedSectionText title={getAdTextByCode(adContents, 20)} 
                text={getAdTextByCode(adContents, 21)}
                image={getAdImageByCode(adContents, 22)}
                customStyles={{container:styles.guidanceContainer}}
            />

            <IlustratedSectionText title={getAdTextByCode(adContents, 30)} 
                text={getAdTextByCode(adContents, 31)}
                image={getAdImageByCode(adContents, 32)}
                customStyles={{container:styles.guidanceContainer}}
            />

            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdProfileFirstStep', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
