import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { styles } from '../MultipleTextedSquareQuestion/styles';
import { Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES, RADIO_BUTTON_FORMAT_SQUARE } from '../../screens/advertisement/advertisementParameters';


interface MultipleTextedSquareQuestionProps {
  question: Question;
  onAnswerSelected: (questionCode: number, answerCode: string | string[]) => void;
  isMultipleChoices?: boolean;
  style?: StyleProp<ViewStyle>;
  shapeCustomStyle?: ViewStyle & TextStyle | undefined;
  textCustomStyle?: TextStyle | undefined;
    
}

export const MultipleTextedSquareQuestion = ({ question, onAnswerSelected, isMultipleChoices=true, style = {}, shapeCustomStyle, textCustomStyle} : MultipleTextedSquareQuestionProps) => {

  const[selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    if(isMultipleChoices){
      onAnswerSelected(question.code, selectedAnswers);  
    } else {
      onAnswerSelected(question.code, selectedAnswers[0]);  
    }   
  }, [selectedAnswers]);


  if(!question?.choices || question.choices.every((item) => item === undefined)){
    console.error(ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES(question?.code?.toString()));
    return;
  }

  const handleAnswerSelection = (choiceCode: string) => {
    if (isMultipleChoices){
      setSelectedAnswers((previousSelection) => {
        const isSelected = previousSelection.includes(choiceCode);
        return isSelected? previousSelection.filter((item) => item !== choiceCode) : [...previousSelection, choiceCode];
      });
    } else{
      setSelectedAnswers([choiceCode]);
    }
  };


  return (
    <View style={style}>

      <View style={styles.addOnsContainer}>
        {question.choices.map((option, index) => (
          <View style={[styles.addOnsRow, index % 2 !== 1 && styles.addOnFirstColumn]} key={option.code}>
            <TouchableOpacity onPress={() => handleAnswerSelection(option.code)}>
              <View style={[styles.shapeDefaults, shapeCustomStyle, selectedAnswers.includes(option.code) && styles.selectedShape]}>
                <Text style={[styles.textDefaults, textCustomStyle, selectedAnswers.includes(option.code)  && styles.selectedText]}>{option.text}</Text>
              </View>
            </TouchableOpacity>
         </View>
        ))}
      </View>
    </View>
  );
};

