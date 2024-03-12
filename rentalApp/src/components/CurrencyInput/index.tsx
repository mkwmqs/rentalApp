import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TextStyle, ViewStyle, TextInputProps } from 'react-native';
import { styles } from "./styles";


interface CurrencyInputProps{
  questionCode: number;
  currencySymbol?: string;
  customStyles?: {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
  };
  onInputChange?: (questionCode: number, answerCode: string) => void; 
}
let typingTimeout;

export function CurrencyInput({ questionCode, currencySymbol = 'R$', customStyles, onInputChange}: CurrencyInputProps) {
  const [value, setValue] = useState('');
  const MAX_DIGITS = 7;

  const handleChangeText = (text: string) => {
    clearTimeout(typingTimeout);
    const numericValue = text.replace(/[^0-9]/g, '');
    const truncatedValue = numericValue.slice(0, MAX_DIGITS);
    const formattedNumericValue = truncatedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const newValue = `${formattedNumericValue}`;
    setValue(newValue);
    typingTimeout = setTimeout(() => {
      onInputChange(questionCode, newValue);
    }, 500);
  };

  return (
    <View style={[styles.container, customStyles?.containerStyle]}>
      <Text style={[styles.currencySymbol, customStyles?.inputStyle]}>{currencySymbol}</Text>
      <TextInput
        style={[styles.input, customStyles?.inputStyle]}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}


