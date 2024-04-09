import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { calculateDailyFareFromVehicleCost, calculateMonthlyDaysByRentalFrequency, fetchAdTextData, fetchFareEstimates, fetchOwnedVehicles, fetchQuestionData, getAdTextByCode, getQuestionByCode, getQuestionSubTitleByCode, getQuestionTitleByCode } from '../adverstisementService';
import { formatNumberToDeviceSettings, formatToMoney, integerToTextWithSeparators } from '../../../utils/textUtils';
import { CURRENCY_DISPLAY, QUESTION_RENTAL_FREQUENCY, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_RENTAL_PLATE, QUESTION_VEHICLE_COST, SCREEN_AD_SIMULATION, SCREEN_AD_VEHICLE_SELECTION, VEHICLE_TYPE_AUTO, VEHICLE_TYPE_MOTO, SCREEN_AD_FARE_REGISTRATION } from '../advertisementParameters';
import { AdContent, AdFareEstimates, Question } from '../advertisementDomains';
import { OwnedVehicleBox } from '../../../components/OwnedVehicleBox';
import color from '../../../styles/color';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';


export function AdFareEstimation() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [fareEstimates, setFareEstimates] = useState<AdFareEstimates>();
    const [answers, setAnswers] = useState<{ [key: number]: string[] }>((route.params as any)?.answers || {});
    const [pictures, setPictures] = useState((route.params as any)?.pictures || []);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchApi = async() => {
            try{
                const contentsRemote = await fetchAdTextData(SCREEN_AD_FARE_REGISTRATION);
                const fareEstimateRemote = await fetchFareEstimates();
                setAdContents(contentsRemote);
                setFareEstimates(fareEstimateRemote);
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

    const handlePressGetAware = () => {

    }

    const pricingDetails = [
        {text: getAdTextByCode(adContents, 21), value: formatToMoney(fareEstimates.basicFare)},
        {text: getAdTextByCode(adContents, 22), value: formatToMoney(fareEstimates.netPrice)}
    ];


  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adContents, 1)}</Text>
            <Text style={styles.paragraphDefault}>{getAdTextByCode(adContents, 11)
                .replace('{currency}', CURRENCY_DISPLAY)
                .replace('{averageFareByVehicleTypeBibipi}', 
                    formatNumberToDeviceSettings(fareEstimates.averageFareBibipi.toString(), 2))
                }
            </Text> 
            
            <View style={styles.compareButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 101)} 
                    color={color.light_green}
                    onPress={() => {}}
                />
            </View>
                

            <Text style={styles.paragraphDoubleSpaced}>{getAdTextByCode(adContents, 12)
                .replace('{currency}', CURRENCY_DISPLAY)
                .replace('{averageFareByVehicleTypeLargeRenters}', 
                    formatNumberToDeviceSettings(fareEstimates.averageFareLargeRenters.toString(), 2))
                }
            </Text> 

            
            <View style={styles.estimateResultIncomeContainer}>
                <View style={styles.estimateResultIncomeBox}>
                    <Text style={styles.estimateResultIncomeAmount}>
                        {CURRENCY_DISPLAY} {formatNumberToDeviceSettings(fareEstimates.basicFare.toString(), 2)}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={handlePressGetAware}>
                <Text style={styles.getAwarePriceLink}>{getAdTextByCode(adContents, 13)}</Text>
            </TouchableOpacity>

            <View style={styles.shapeDefaults}>
                {pricingDetails.map((composition, index) => (
                <View key={index} style={styles.pricingRow}>
                    <Text style={styles.pricingRowDescription}>{composition.text}</Text>
                    <Text style={styles.pricingRowValue}>{composition.value}</Text>
                </View>
                ))}
                <StraightLineSeparator/>
                <View style={styles.pricingRow}>
                    <Text style={styles.pricingRowDescription}>{getAdTextByCode(adContents, 31)}</Text>
                    <Text style={styles.pricingRowValue}>{formatToMoney(fareEstimates.netPrice)}</Text>
                </View>
                <View style={styles.pricingRow}></View>
            </View>

            <View style={[styles.shapeDefaults, styles.shapeSingleBox]}>
                <View style={styles.pricingRow}>
                    <Text style={styles.pricingRowDescription}>{getAdTextByCode(adContents, 41)}</Text>
                    <Text style={styles.pricingRowValue}>{formatToMoney(fareEstimates.netProceeds)}</Text>
                </View>
                <View style={styles.pricingRow}></View>
            </View>

            <View style={styles.shapeFlexMessage}>
                <View style={styles.pricingRow}>
                    <Text style={styles.flexMessageText}>{getAdTextByCode(adContents, 51)}</Text>
                </View>
                <View style={styles.flexButton}>
                    <ColoredButton 
                        title={getAdTextByCode(adContents, 102)} 
                        color={color.light_green}
                        onPress={() => {}}
                    />
                </View>
                <Text style={styles.getAwareFlexLink}>{getAdTextByCode(adContents, 52)}</Text>
            </View>            



            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adContents, 100)} 
                    color={color.light_green}
                    onPress={() => /* TODO navigation.navigate('AdProfileSecondStep', { answers: answers, pictures: pictures })*/{}}
                    />
            </View>

        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
