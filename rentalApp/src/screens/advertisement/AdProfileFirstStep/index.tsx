import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../AdProfileFirstStep/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SingleChoiceHorizontalImage } from '../../../components/SingleChoiceHorizontalImage';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { CURRENCY_DISPLAY, QUESTION_RENTAL_FREQUENCY, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_VEHICLE_COST, SCREEN_AD_PROFILE_FIRST_STEP, SCREEN_AD_PROFILE_INTRODUCTION, SCREEN_AD_SIMULATION } from '../advertisementParameters';
import { AdContent, Question } from '../advertisementDomains';
import { fetchAdTextData, getAdImageByCode, getAdTextByCode } from '../adverstisementService';
import { IlustratedSectionText } from '../../../components/IlustratedSectionText';


export function AdProfileFirstStep() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const contentesRemote = await fetchAdTextData(SCREEN_AD_PROFILE_FIRST_STEP);
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

  return (

    
    <View style={styles.mainContainer}>
        <BackArrow screen='AdSimulation'/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            
            <View style={styles.imageContainer}>
                <Image source={getAdImageByCode(adContents, 11)} style={styles.image}/>
            </View>

 
            <Text style={styles.paragraphHeader}>{getAdTextByCode(adContents, 20)}</Text>
            <Text style={styles.paragraph}>{getAdTextByCode(adContents, 21)}</Text>
            <Text style={styles.paragraph}>{getAdTextByCode(adContents, 22)}</Text>


            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdVehicleSelection', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
