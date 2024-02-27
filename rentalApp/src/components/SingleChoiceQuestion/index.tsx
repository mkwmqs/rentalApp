import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { styles } from '../SingleChoiceQuestion/styles';


interface SingleChoiceQuestionProps {
  questionCode: string;
  question: string;
  choices: string[];
  disclaimer?: string;
  answersCodes?: any[] | undefined; 
  onAnswerSelected: (questionCode: string, answerCode: string) => void;
  style?: StyleProp<ViewStyle>;
}



export const SingleChoiceQuestion = ({ questionCode, question, choices, 
    disclaimer = '', answersCodes, onAnswerSelected, style = {}}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  choices = choices || [];

  if(!answersCodes){ //defaults to the own indexes whenever not passed on
    answersCodes = answersCodes || [];
    choices.map((option, index) => (
      answersCodes[index] = index
    ))
  }

  if (choices.size !== answersCodes.size){
    return;
  }


  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    onAnswerSelected(questionCode, answersCodes[index]);
  };

  return (
    <View style={style}>
      <Text style={styles.questionText}>{question}</Text>

      {disclaimer && 
        <Text style={styles.disclaimer}>{disclaimer}</Text>
      }

      {choices.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerContainer}
          onPress={() => handleAnswerSelection(index)}
        >
          <View style={styles.textContainer}>
            <Text style={styles.answerText}>{`${option}`}</Text>
          </View>
          <View style={styles.radioContainer}>
            <Radio selected={selectedAnswer === index} />
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