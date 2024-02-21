import { View, Text, useWindowDimensions, Image, ImageSourcePropType, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./styles";

interface EnumeratedLineItemProps {
  enumerator?: string,
  text: string,
    
  customStyles?: {
    containerStyle?: any;
    enumeratorStyle?: any;
    textStyle?: any;
  };
}

export function EnumeratedLineItem({ enumerator, text, customStyles = {} }: EnumeratedLineItemProps) {
  const defaultEnumerator = '\u2022';
  const {
    containerStyle: customContainerStyle,
    enumeratorStyle: customEnumeratorStyle,
    textStyle: customTextStyle,
  } = customStyles;  

  const containerStyle = {
    ...styles.enumeratorItemContainer,
    ...customContainerStyle,
  };

  const enumeratorStyle = {
    ...styles.enumeratorItemIcon,
    ...customEnumeratorStyle,
  };

  const textStyle = {
    ...styles.enumeratorItemText,
    ...customTextStyle,
  };

  return (

    <View style={containerStyle}>
        <Text style={enumeratorStyle}>{enumerator || defaultEnumerator}</Text>
        <Text style={textStyle}>{text}</Text>
    </View>

 

  )
};


