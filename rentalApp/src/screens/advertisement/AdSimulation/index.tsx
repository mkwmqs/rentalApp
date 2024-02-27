import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdSimulation/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import budgetCar from '../../../../assets/budgetCar.png';
import moto from '../../../../assets/moto.png';
import sportsCar from '../../../../assets/sportsCar.png';
import classicCar from '../../../../assets/classicCar.png';
import luxCar from '../../../../assets/luxCar.png';
import suvCar from '../../../../assets/SuvCar.png';
import { SingleChoiceHorizontalImagem } from '../../../components/SingleChoiceHorizontalImage';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { SingleChoiceQuestion } from '../../../components/SingleChoiceQuestion';
import { CurrencyInput } from '../../../components/CurrencyInput';
import { getMonthlyAverageBusinessDaysCount, getMonthlyAverageWeekendDaysCount } from '../../../utils/dateUtils';

export function AdSimulation() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [answers, setAnswers] = useState((route.params as any)?.answers || {});
    const [estimateResult, setEstimateResult] = useState<number>(0);
    const CURRENCY_DISPLAY = 'R$'
    const DAILY_RENTAL_FARE = 70;
    const QUESTION_CODE_VEHYCLE_TYPE = '101';
    const QUESTION_CODE_RENTAL_FREQUENCY = '102';

    useEffect(() => {
        setEstimateResult(Math.floor(calculateEstimatedProfit()));
      }, [answers[QUESTION_CODE_RENTAL_FREQUENCY]]);

    const addAnswer = (questionCode: string, answerCode: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionCode]: answerCode,
        }));
    };

    const handleSelectedAnswer = (questionCode: string, answerCode: string) => {
        addAnswer(questionCode , answerCode);
      };

    const handleSelectedCarType = (answerCode: string) => {
        handleSelectedAnswer(QUESTION_CODE_VEHYCLE_TYPE , answerCode);
      };

    const getEstimatedMonthlyIncome = () => {
        return estimateResult * DAILY_RENTAL_FARE;
    }

    const calculateEstimatedProfit = ():number => {
        let numberOfMonthlyDays: number = 0;
        switch(answers[QUESTION_CODE_RENTAL_FREQUENCY]){
            case '1':
                numberOfMonthlyDays = 365 / 12 / 7;
                break;
            case '2':
                numberOfMonthlyDays = (365 / 12 / 7) * 2;
                break;
            case '3':
                numberOfMonthlyDays = (365 / 12 / 7) * 3;
                break;
            case '4':
                numberOfMonthlyDays = getMonthlyAverageBusinessDaysCount();
                break;
            case '5':
                numberOfMonthlyDays = 30;
                break;
            case '6':
                numberOfMonthlyDays = getMonthlyAverageWeekendDaysCount(); 
                break;
        }

        return numberOfMonthlyDays;
    }

    const images = [
        {answerCode: '1', source:budgetCar, subtitle: 'Popular'},
        {answerCode: '2', source:moto, subtitle: 'Moto'},
        {answerCode: '3', source:sportsCar, subtitle: 'Esportivo'},
        {answerCode: '4', source:classicCar, subtitle: 'Clássico'},
        {answerCode: '5', source:luxCar, subtitle: 'Luxuoso'},
        {answerCode: '6', source:suvCar, subtitle: 'SUV'}
    ];



  return (
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>Simule como ganhar dinheiro com seu veículo</Text>
            <Text style={styles.subtitle}>Escolha o tipo:</Text>

            <SingleChoiceHorizontalImagem images={images}  onAnswerSelected={handleSelectedCarType} style={styles.carsImages}/>
            <StraightLineSeparator/>


            <SingleChoiceQuestion style={styles.frequencyQuestionContainer}
                questionCode = {QUESTION_CODE_RENTAL_FREQUENCY}
                question='Qual a frequência que você deseja compartilhar o seu veículo na semana?'
                choices={['1 dia qualquer',
                            '2 dias quaisquer',
                            '3 dias quaisquer',
                            'Todos os dias úteis',
                            'Todos os dias',
                            'Todos os finais de semana']}
                answersCodes={['1', '2', '3', '4', '5', '6']}
                onAnswerSelected={handleSelectedAnswer}
            />
            <StraightLineSeparator/>


            <View style={styles.valuationQuestionContainer}>
                <Text style={styles.valuationQuestionHeader}>Qual o valor estimado do seu veículo?</Text>
                <CurrencyInput customStyles={{containerStyle:styles.currencyContainer, inputStyle:styles.currencyInput}}/>
                <Text style={styles.valuationDisclaimer}>Nesta simulação, a diária do compartilhamento
                    é estimada pelo valor total do veículo</Text>
            </View>
            <StraightLineSeparator/>

            <View>{estimateResult ? (
                <View style={styles.estimateResultContainer}>
                    <Text style={styles.estimateResultHeader}>Estimativa</Text>
                    <Text style={styles.estimateResultDisclaimer}>{estimateResult} compartilhamentos a {CURRENCY_DISPLAY} {DAILY_RENTAL_FARE} por dia</Text>
                    <View style={styles.estimateResultIncomeContainer}>
                        <View style={styles.estimateResultIncomeBox}>
                        <Text style={styles.estimateResultIncomeAmount}>{CURRENCY_DISPLAY} {getEstimatedMonthlyIncome()}</Text>
                        <Text style={styles.estimateResultIncomeSubtitle}>(Renda mensal estimada)</Text>
                    </View>
                    </View>
                </View> 
                ) : null}
            </View>


            


            <View style={styles.forwardButton}>
                <ColoredButton 
                    title={'Continuar'} 
                    color={color.light_blue}
                    onPress={() => navigation.navigate('AdPicturesIntroduction', { answers: answers })}
                    />
            </View>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
