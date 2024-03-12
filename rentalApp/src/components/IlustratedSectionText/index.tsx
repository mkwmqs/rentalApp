import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from 'react-native';
import { styles } from "./styles";



interface IlustratedSectionTextProps {
  title?: string;
  text: string;
  image: ImageSourcePropType;
  customStyles?: {
    container?: ViewStyle;
    title?: TextStyle;
    contentContainer?: ViewStyle;
    paragraph?: TextStyle;
    image?: ImageStyle;
  };
}

export const IlustratedSectionText: React.FC<IlustratedSectionTextProps> = ({ title, text, image, customStyles: customStyles }) => {
  
  const mergedStyles = {
    container: { ...styles.container, ...customStyles?.container },
    title: { ...styles.title, ...customStyles?.title },
    contentContainer: { ...styles.contentContainer, ...customStyles?.contentContainer },
    paragraph: { ...styles.paragraph, ...customStyles?.paragraph },
    image: { ...styles.image, ...customStyles?.image },
  };

  return (
    <View style={mergedStyles.container}>
      <Text style={mergedStyles.title}>{title}</Text>
      <View style={mergedStyles.contentContainer}>
        <Text style={mergedStyles.paragraph}>{text}</Text>
        <Image source={image} style={mergedStyles.image} />
      </View>
    </View>
  );
};
