import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { styles } from '../SingleChoiceQuestion/styles';
import { Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES } from '../../screens/advertisement/advertisementParameters';


interface SingleChoiceQuestionProps {
  question: Question
  onAnswerSelected: (questionCode: number, answerCode: string) => void;
  style?: StyleProp<ViewStyle>;
  isDoubleSpaced?: boolean
}



export const SingleChoiceQuestion = ({ question, onAnswerSelected, style = {}, isDoubleSpaced=false} : SingleChoiceQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if(!question?.choices){
    console.log(ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES(question?.code?.toString()))
    return;
  }


  const handleAnswerSelection = (choiceCode) => {
    setSelectedAnswer(choiceCode);
    onAnswerSelected(question.code, choiceCode);
  };

  return (
    <View style={style}>
      <Text style={styles.questionText}>{question.title}</Text>

      {question.subtitle && 
        <Text style={styles.disclaimer}>{question.subtitle}</Text>
      }
      <View style={styles.beforeFirstChoice}/>
      {question.choices.map((option, index) => (
        <TouchableOpacity
          key={option.code}
          style={isDoubleSpaced? styles.answerContainerDoubleSpaced : styles.answerContainer}
          onPress={() => handleAnswerSelection(option.code)}
        >
          <View style={styles.textContainer}>
            <Text style={styles.answerText}>{option.text}</Text>
          </View>
          <View style={styles.radioContainer}>
            <Radio selected={selectedAnswer === option.code} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Radio = ({ selected }) => {
  return (
    <View style={styles.radioContainer}>
      {selected && <View style={styles.radioDot} />}
    </View>
  );
};