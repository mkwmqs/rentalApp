import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../AdVehicleSelection/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';

import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';

import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { calculateDailyFareFromVehicleCost, calculateMonthlyDaysByRentalFrequency, fetchAdTextData, fetchOwnedVehicles, fetchQuestionData, getAdTextByCode, getQuestionByCode, getQuestionSubTitleByCode, getQuestionTitleByCode } from '../adverstisementService';
import { integerToTextWithSeparators } from '../../../utils/textUtils';
import { CURRENCY_DISPLAY, QUESTION_RENTAL_FREQUENCY, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_RENTAL_PLATE, QUESTION_VEHICLE_COST, SCREEN_AD_SIMULATION, SCREEN_AD_VEHICLE_SELECTION, VEHICLE_TYPE_AUTO, VEHICLE_TYPE_MOTO } from '../advertisementParameters';
import { AdContent, AdVehicle, Question } from '../advertisementDomains';
import { OwnedVehicleBox } from '../../../components/OwnedVehicleBox';


export function AdVehicleSelection() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [autos, setAutos] = useState<AdVehicle[]>([]);
    const [motos, setMotos] = useState<AdVehicle[]>([]);
    const [answers, setAnswers] = useState<{ [key: number]: string[] }>((route.params as any)?.answers || {});
    const [vehicleSelection, setVehicleSelection] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchApi = async() => {
            try{
                const contentsRemote = await fetchAdTextData(SCREEN_AD_VEHICLE_SELECTION);
                const autosRemote = await fetchOwnedVehicles(VEHICLE_TYPE_AUTO);
                const motosRemote = await fetchOwnedVehicles(VEHICLE_TYPE_MOTO);
                setAdContents(contentsRemote);
                setAutos(autosRemote);
                setMotos(motosRemote);
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

    const handleSelectedAnswer = (vehicle: AdVehicle) => {
        setVehicleSelection([vehicle.plate]);
        addAnswer(QUESTION_RENTAL_PLATE , vehicle.plate);
        console.log(vehicle);
        navigation.navigate('AdVehicleDetails', { answers: answers, selectedVehicle: vehicle, selectedVehicleTexts: adContents });
      };


  return (
    <View style={styles.mainContainer}>
        <BackArrow screen='AdSimulation'/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            
            <OwnedVehicleBox 
                vehicles={autos} title={getAdTextByCode(adContents, 21)}
                adContents={adContents} onAnswerSelected={handleSelectedAnswer}
                style={styles.vehicleBox} vehicleSelection={vehicleSelection}
            />
            <StraightLineSeparator/>
            <OwnedVehicleBox 
                vehicles={motos} title={getAdTextByCode(adContents, 22)}
                adContents={adContents} onAnswerSelected={handleSelectedAnswer}
                style={styles.vehicleBox} vehicleSelection={vehicleSelection}
            />

        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
