import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { styles } from '../MultipleChoiceQuestion/styles';
import { Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES, RADIO_BUTTON_FORMAT_SQUARE } from '../../screens/advertisement/advertisementParameters';


interface MultipleChoiceQuestionProps {
  question: Question;
  onAnswerSelected: (questionCode: number, answerCode: string | string[]) => void;
  isMultipleChoices?: boolean;
  isColumnSharing?: boolean;
  style?: StyleProp<ViewStyle>;
  radioFormat?: 'ball' | 'square';
  
}


export const MultipleChoiceQuestion = ({ question, onAnswerSelected, isMultipleChoices = true, 
  isColumnSharing = false, style = {}, radioFormat = RADIO_BUTTON_FORMAT_SQUARE} : MultipleChoiceQuestionProps) => {

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
      <Text style={styles.questionText}>{question.title}</Text>

      {question.subtitle && 
        <Text style={styles.disclaimer}>{question.subtitle}</Text>
      }
      <View style={isColumnSharing ? styles.containerTwoColumns : styles.containerSingleColumn}>
      {question.choices.map((option, index) => (
        <TouchableOpacity
          key={option.code}
          style={isColumnSharing ? styles.answerContainerTwoColumns : styles.answerContainerSingleColumn}
          onPress={() => handleAnswerSelection(option.code)}
        >
          <View style={radioFormat === RADIO_BUTTON_FORMAT_SQUARE ? styles.radioContainer : styles.radioBallContainer}>
            <Radio selected={isMultipleChoices? selectedAnswers.includes(option.code) : selectedAnswers[0] === option.code}
              radioFormat={radioFormat} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.answerText}>{option.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
};

const Radio = ({ selected, radioFormat }) => {
  return (
    <View style={radioFormat === RADIO_BUTTON_FORMAT_SQUARE ? styles.radioContainer : styles.radioBallContainer}>
      {selected && <View style={radioFormat === RADIO_BUTTON_FORMAT_SQUARE ? styles.radioDot : styles.radioBallDot} />}
    </View>
  );
};
