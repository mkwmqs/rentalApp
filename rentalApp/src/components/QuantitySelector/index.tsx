import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { styles } from '../QuantitySelector/styles';
import { Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES } from '../../screens/advertisement/advertisementParameters';
import { min } from 'date-fns';


interface QuantitySelectorProps {
  question: Question,
  onAnswerSelected: (questionCode: number, answerCode: string) => void,
  minValue?: number,
  maxValue?: number,
  defaultValue?: number,
  style?
}



export const QuantitySelector : React.FC<QuantitySelectorProps> = (
  {question, onAnswerSelected, minValue = 0, maxValue = 999, defaultValue, style = {}}
) => {
  
  if(!question?.choices){
    console.log(ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES(question?.code?.toString()))
    return;
  }
  
  const[quantity, setQuantity] = useState(defaultValue);
  useEffect(() => {
    onAnswerSelected(question.code, quantity.toString());  
  }, [quantity]);


  const decrease = () => {
    setQuantity((previousQuantity) => Math.max(previousQuantity - 1, minValue));
  }
  const increase = () => {
    setQuantity((previousQuantity) => Math.min(previousQuantity + 1, maxValue));
  }


  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{question.title}</Text>
      <View style={styles.touchables}>
          <TouchableOpacity style={styles.modifier} onPress={decrease}>
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.quantityBox}>
            <Text>{quantity}</Text>
          </View>
          <TouchableOpacity style={styles.modifier} onPress={increase}>
            <Text>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

