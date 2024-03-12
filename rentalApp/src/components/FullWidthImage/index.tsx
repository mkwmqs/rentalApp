import { View, Text, useWindowDimensions, Image, ImageSourcePropType, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./styles";

interface fullWidgthlImageProps {
  obj: {
    image: any,
    description?: string,
    heightRatio?: number
  }
}

export function FullWidthImage({ obj }: fullWidgthlImageProps) {
  const { width,height } = useWindowDimensions();
  const defaultHeightRatioValue = 1; 
  obj.heightRatio = obj.heightRatio ?? defaultHeightRatioValue;
  obj.description = obj.description ?? '';
  return (
    

    <View style={styles.container}>
      <ImageBackground
        source={obj.image}
        style={{ width, height:width*obj.heightRatio }} 
      />
      
      <View style={[styles.overlayText, {top: width*obj.heightRatio/2}]}>
        <Text style={styles.textContent}>{obj.description}</Text>
      </View>
    </View>

  )
};


