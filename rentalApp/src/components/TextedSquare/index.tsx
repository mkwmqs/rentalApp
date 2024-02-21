import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { styles } from '../TextedSquare/styles';


interface TextedSquareProps {
  text: string;
  questionCode: string;
  onPress: (questionCode: string, isSelected: boolean) => void;
  shapeCustomStyle?: ViewStyle & TextStyle | undefined;
  textCustomStyle?: TextStyle | undefined;
}

const TextedSquare: React.FC<TextedSquareProps> = ({ questionCode, text, onPress, shapeCustomStyle, textCustomStyle }) => {
  
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress(questionCode, isSelected);
  };
  
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.shapeDefaults, shapeCustomStyle, isSelected && styles.selectedShape]}>
            <Text style={[styles.textDefaults, textCustomStyle, isSelected && styles.selectedText]}>{text}</Text>
            </View>
        </TouchableOpacity>
  );
};

export default TextedSquare;
