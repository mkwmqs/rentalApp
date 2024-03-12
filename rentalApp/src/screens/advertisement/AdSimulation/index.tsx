import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../AdSimulation/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SingleChoiceHorizontalImage } from '../../../components/SingleChoiceHorizontalImage';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { calculateDailyFareFromVehicleCost, calculateMonthlyDaysByRentalFrequency, fetchAdTextData, fetchQuestionData, getAdTextByCode, getQuestionByCode, getQuestionSubTitleByCode, getQuestionTitleByCode } from '../adverstisementService';
import { integerToTextWithSeparators } from '../../../utils/textUtils';
import { CURRENCY_DISPLAY, QUESTION_RENTAL_FREQUENCY, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_VEHICLE_COST, SCREEN_AD_SIMULATION } from '../advertisementParameters';
import { AdContent, Question } from '../advertisementDomains';


export function AdSimulation() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [adTexts, setAdTexts] = useState<AdContent[]>([]);
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [estimatedFrequencyResult, setEstimatedFrequencyResult] = useState<number>(0);
    const [estimatedMonthlyIncome, setEstimatedMontlyIncome] = useState<string>('0');
    const [estimatedDailyFare, setEstimatedDailyFare] = useState<string>('0');
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const questionsRemote = await fetchQuestionData([QUESTION_VEHYCLE_TYPE_SIMULATION,
                    QUESTION_RENTAL_FREQUENCY, QUESTION_VEHICLE_COST]);
                const textsRemote = await fetchAdTextData(SCREEN_AD_SIMULATION);
                setQuestions(questionsRemote);
                setAdTexts(textsRemote);
            } catch(error){
                console.error(error.message);
            } finally {
                setLoading(false)
            }};
        fetchApi();
    }, []);

    useEffect(() => {
        if(answers[QUESTION_RENTAL_FREQUENCY] && answers[QUESTION_VEHICLE_COST]){
            const frequencyResult:number = Math.floor(calculateMonthlyDaysByRentalFrequency(answers[QUESTION_RENTAL_FREQUENCY][0]));
            const dailyFare:number = calculateDailyFareFromVehicleCost(answers[QUESTION_VEHICLE_COST][0]);
            setEstimatedFrequencyResult(frequencyResult);
            setEstimatedDailyFare(integerToTextWithSeparators(dailyFare));
            setEstimatedMontlyIncome(integerToTextWithSeparators(frequencyResult * dailyFare));
        }
      }, [answers[QUESTION_RENTAL_FREQUENCY], answers[QUESTION_VEHICLE_COST]]);

    const addAnswer = (questionCode: number, answerCode: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionCode]: [answerCode],
        }));
    };

    const handleSelectedAnswer = (questionCode: number, answerCode: string) => {
        addAnswer(questionCode , answerCode);
      };

    const handleSelectedCarType = (answerCode: string) => {
        handleSelectedAnswer(QUESTION_VEHYCLE_TYPE_SIMULATION , answerCode);
      };

      if(loading){
        return null;
    }

  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>{getAdTextByCode(adTexts, 1)}</Text>
            <Text style={styles.subtitle}>{getQuestionTitleByCode(questions, QUESTION_VEHYCLE_TYPE_SIMULATION)}</Text>

            <SingleChoiceHorizontalImage onAnswerSelected={handleSelectedCarType} style={styles.carsImages}
                question={getQuestionByCode(questions, QUESTION_VEHYCLE_TYPE_SIMULATION)}/>
            <StraightLineSeparator/>

            <SingleChoiceQuestion style={styles.frequencyQuestionContainer}
                question={getQuestionByCode(questions, QUESTION_RENTAL_FREQUENCY)}
                onAnswerSelected={handleSelectedAnswer}
            />
            <StraightLineSeparator/>

            <View style={styles.valuationQuestionContainer}>
                <Text style={styles.valuationQuestionHeader}>{getQuestionTitleByCode(questions, QUESTION_VEHICLE_COST)}</Text>
                <CurrencyInput customStyles={{containerStyle:styles.currencyContainer, inputStyle:styles.currencyInput}}
                    questionCode = {QUESTION_VEHICLE_COST} onInputChange={handleSelectedAnswer}/>
                <Text style={styles.valuationDisclaimer}>{getQuestionSubTitleByCode(questions, QUESTION_VEHICLE_COST)}</Text>
            </View>
            <StraightLineSeparator/>

            <View>{estimatedFrequencyResult ? (
                <View style={styles.estimateResultContainer}>
                    <Text style={styles.estimateResultHeader}>{getAdTextByCode(adTexts, 2)}</Text>
                    <Text style={styles.estimateResultDisclaimer}>{getAdTextByCode(adTexts, 3)
                        .replace('{sharingFrequency}', estimatedFrequencyResult.toString())
                        .replace('{currency}', CURRENCY_DISPLAY)
                        .replace('{dailyCost}', estimatedDailyFare)
                        }</Text>
                    <View style={styles.estimateResultIncomeContainer}>
                        <View style={styles.estimateResultIncomeBox}>
                            <Text style={styles.estimateResultIncomeAmount}>{CURRENCY_DISPLAY} {estimatedMonthlyIncome}</Text>
                            <Text style={styles.estimateResultIncomeSubtitle}>{getAdTextByCode(adTexts, 4)}</Text>
                        </View>
                    </View>
                </View> 
                ) : null}
            </View>


            {//CONTINUAR AQUI, link como seus ganhos....
            //continuar aqui, imagem
            //continuar aqui, quadro qualquer dúvida chame a getCurrentYear
            //continuar aqui, perguntas frequentes
            }


            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={getAdTextByCode(adTexts, 100)} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdProfileIntroduction', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
