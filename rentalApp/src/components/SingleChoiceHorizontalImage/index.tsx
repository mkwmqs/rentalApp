import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../SingleChoiceHorizontalImage/styles';
import { Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES } from '../../screens/advertisement/advertisementParameters';


interface ImageSelectorProps {
  question: Question,
  onAnswerSelected: (answerCode: string) => void;
  style?: StyleProp<ViewStyle>;
} 



export function SingleChoiceHorizontalImage( {question, onAnswerSelected, style={}}: ImageSelectorProps){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageSelection = (answerCode: string) => {
    setSelectedImage(answerCode);
    onAnswerSelected(answerCode);
  }
  console.log('sigleChoiceHorizontalImage questao recebida: ' + question);
  if(!question?.choices){
    console.log(ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES(question?.code?.toString()));
    return;
  }

  return (
    <View style={[styles.container, style]}>
      {
        question.choices.map( (option) => (
          <TouchableOpacity 
            key={option.code} 
            onPress={() => handleImageSelection(option.code)}
            style={styles.imageContainer}
          >
              <Image source={option.image} style={styles.image} />
              <Text style={styles.subtitle}>{option.text}</Text>
              {selectedImage === option.code && <View style={styles.greenLine} />}
              {selectedImage !== option.code && <View style={styles.noLine} />}
          </TouchableOpacity>
        ))
      }
      
    </View>
  );
};

