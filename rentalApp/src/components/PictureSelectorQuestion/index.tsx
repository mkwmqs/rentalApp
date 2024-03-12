import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TouchableOpacityComponent, StyleProp, ViewStyle, TextStyle } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AdContent, Question } from '../../screens/advertisement/advertisementDomains';
import { styles } from '../PictureSelectorQuestion/styles';

import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { getAdImageByCode } from '../../screens/advertisement/adverstisementService';

interface PictureSelectorQuestionProps {
    question: Question;
    adContents?: AdContent[];
    onAnswerSelected: (questionCode: number, answerCode: string | string[]) => void;
    style?: StyleProp<ViewStyle>;
    shapeCustomStyle?: ViewStyle & TextStyle | undefined;
    textCustomStyle?: TextStyle | undefined;
      
  }


export const PictureSelectorQuestion = ({ question, adContents, onAnswerSelected, 
    style = {}, shapeCustomStyle, 
    textCustomStyle} : PictureSelectorQuestionProps) => {

  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
  
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Autorize o app a acessar suas fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    console.log(result);

    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  }

  
  const openCamera = async () => {
  
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Autorize o app a acessar a sua câmera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    console.log(result);

    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  }


  const openOverlayOptions = () => {

  }

  return (
    <View style={style}>
      <View style={styles.addOnsContainer}>
        {question.choices.map((option, index) => (
            <View style={[styles.addOnsRow, index % 2 !== 1 && styles.addOnFirstColumn]} key={option.code}>
              <TouchableOpacity onPress={openOverlayOptions} >
                {pickedImagePath ? (
                  <Image source={{ uri: pickedImagePath}} style={styles.imagePreview} />
                ) : (
                  <View style={[styles.shapeDefaults, shapeCustomStyle]}>
                    <Text style={[styles.textDefaults, textCustomStyle]}>{option.text}</Text>
                    {adContents && <Image source={getAdImageByCode(adContents, 20)} style={styles.imageOverlay} />}
                  </View>
                )}
              </TouchableOpacity>
              </View>
        ))}
      </View>
    </View>
  );
}

