import { ScrollView } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { styles } from '../AdVehicleDetails/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { BackArrow } from '../../../components/BackArrow';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SingleChoiceHorizontalImage } from '../../../components/SingleChoiceHorizontalImage';
import { StraightLineSeparator } from '../../../components/StraightLineSeparator';
import { MultipleChoiceQuestion } from '../../../components/MultipleChoiceQuestion';
import { QUESTION_VEHICLE_TYPE_REGISTRATION, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_VEHICLE_KM, SCREEN_AD_VEHICLE_DETAILS, QUESTION_VEHICLE_TRANSMISSION_TYPE, QUESTION_VEHICLE_SEATS_CAPACITY, QUESTION_VEHICLE_DOORS_TOTAL, QUESTION_VEHICLE_CONDITION, RADIO_BUTTON_FORMAT_BALL, BAD_CONDITION_VEHICLE_ANSWER, QUESTION_VEHICLE_CONDITION_DETAILS } from '../advertisementParameters';
import { AdContent, Question, AdVehicle } from '../advertisementDomains';
import { fetchAdTextData, fetchQuestionData, getAdImageByCode, getAdTextByCode, getQuestionByCode, getQuestionTitleByCode } from '../adverstisementService';
import { OwnedVehicleBox } from '../../../components/OwnedVehicleBox';
import { QuantitySelector } from '../../../components/QuantitySelector';
import { TextInput } from 'react-native';



export function AdVehicleDetails() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [adContents, setAdContents] = useState<AdContent[]>([]);
    const [answers, setAnswers] = useState<{ [key: number]: string[] }>((route.params as any)?.answers || {});
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [justificationText, setJustificationText] = useState<string>('');
    const [isConditionJustifiable, setIsConditionJustifiable] = useState(false);
    const { selectedVehicle, selectedVehicleTexts } : 
        { selectedVehicle? : AdVehicle, selectedVehicleTexts? :  AdContent[] } = route.params || {};
    

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const contentsRemote = await fetchAdTextData(SCREEN_AD_VEHICLE_DETAILS);
                setAdContents(contentsRemote);
                const questionsRemote = await fetchQuestionData([QUESTION_VEHICLE_TYPE_REGISTRATION, 
                    QUESTION_VEHICLE_KM, QUESTION_VEHICLE_TRANSMISSION_TYPE, QUESTION_VEHICLE_SEATS_CAPACITY,
                    QUESTION_VEHICLE_DOORS_TOTAL, QUESTION_VEHICLE_CONDITION]);
                setQuestions(questionsRemote);
            } catch(error){
                console.error(error.message);
            } finally {
                setLoading(false)
            }};
        fetchApi();
        
    }, []);


    useEffect(() => {
        if (answers[QUESTION_VEHICLE_CONDITION] && answers[QUESTION_VEHICLE_CONDITION][0] 
            && answers[QUESTION_VEHICLE_CONDITION][0] === BAD_CONDITION_VEHICLE_ANSWER.toString()){
                setIsConditionJustifiable(true);
        } else{
                answers[QUESTION_VEHICLE_CONDITION_DETAILS] = null;
                setIsConditionJustifiable(false);
        }
        
    }, [answers[QUESTION_VEHICLE_CONDITION]]);


    if(loading){
        return null;
    }
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


    return (
        
        
    <View style={styles.mainContainer}>
        <BackArrow/>

        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="on-drag">
        

            <OwnedVehicleBox vehicles={[selectedVehicle]} adContents={selectedVehicleTexts} isTouchable={false} />
            <StraightLineSeparator/>

            <Text style={styles.subtitle}>{getQuestionTitleByCode(questions, QUESTION_VEHICLE_TYPE_REGISTRATION)}</Text>

            <SingleChoiceHorizontalImage onAnswerSelected={handleSelectedCarType} style={styles.carsImages}
                question={getQuestionByCode(questions, QUESTION_VEHICLE_TYPE_REGISTRATION)}/>
            <StraightLineSeparator/>

            <MultipleChoiceQuestion style={styles.sectionContainer}
                question={getQuestionByCode(questions, QUESTION_VEHICLE_KM)} radioFormat={RADIO_BUTTON_FORMAT_BALL}
                onAnswerSelected={handleSelectedAnswer} isMultipleChoices={false} isColumnSharing={false}
            />
            <StraightLineSeparator/>

            <MultipleChoiceQuestion style={styles.sectionContainer}
                question={getQuestionByCode(questions, QUESTION_VEHICLE_TRANSMISSION_TYPE)} radioFormat={RADIO_BUTTON_FORMAT_BALL}
                onAnswerSelected={handleSelectedAnswer} isMultipleChoices={false} isColumnSharing={true}
            />
            <StraightLineSeparator/>            

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{getAdTextByCode(adContents, 1)}</Text>
                <QuantitySelector question={getQuestionByCode(questions, QUESTION_VEHICLE_SEATS_CAPACITY)}
                    minValue={1} maxValue={15} onAnswerSelected={handleSelectedAnswer} defaultValue={5}
                    style={styles.quantityQuestion}
                />
                <QuantitySelector question={getQuestionByCode(questions, QUESTION_VEHICLE_DOORS_TOTAL)}
                    minValue={2} maxValue={5} onAnswerSelected={handleSelectedAnswer} defaultValue={4}
                    style={styles.quantityQuestion}
                />
            </View>
            <StraightLineSeparator/>            

            <MultipleChoiceQuestion style={styles.sectionContainer}
                question={getQuestionByCode(questions, QUESTION_VEHICLE_CONDITION)} radioFormat={RADIO_BUTTON_FORMAT_BALL}
                onAnswerSelected={handleSelectedAnswer} isMultipleChoices={false} isColumnSharing={false}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputMainContainer}
                keyboardVerticalOffset={50}
            >
                {isConditionJustifiable &&
                <View style={styles.justificationContainer}>
                    <TextInput
                        style={styles.justificationText}                                
                        multiline
                        placeholder={getAdTextByCode(adContents, 21)} 
                        maxLength={250}
                        value={justificationText}
                        onChangeText={(text) => setJustificationText(text)}
                        underlineColorAndroid='transparent'
                    />
                </View>}
                <View style={styles.forwardButton}>
                    <ColoredButton 
                        title={getAdTextByCode(adContents, 100)} 
                        color={color.light_green}
                        onPress={() => navigation.navigate('AdCover', { answers: answers })}
                        />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
        <NavBottom/>
    </View>

  );
    
  
};
