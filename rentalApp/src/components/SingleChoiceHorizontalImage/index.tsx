import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../SingleChoiceHorizontalImage/styles';


interface ImageSelectorProps {
  images: Array<{ 
    answerCode: string; 
    source: any; 
    subtitle: string }>;
  onAnswerSelected: (answerCode: string) => void;
  style?: StyleProp<ViewStyle>;

} 



export function SingleChoiceHorizontalImagem( {images, onAnswerSelected, style={}}: ImageSelectorProps){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageSelection = (answerCode: string) => {
    setSelectedImage(answerCode);
    onAnswerSelected(answerCode);
  }
  

  return (
    <View style={[styles.container, style]}>
      {
        images.map( (image) => (
          <TouchableOpacity 
            key={image.answerCode} 
            onPress={() => handleImageSelection(image.answerCode)}
            style={styles.imageContainer}
          >
              <Image source={image.source} style={styles.image} />
              <Text style={styles.subtitle}>{image.subtitle}</Text>
              {selectedImage === image.answerCode && <View style={styles.greenLine} />}
          </TouchableOpacity>
        ))
      }
      
    </View>
  );
};

