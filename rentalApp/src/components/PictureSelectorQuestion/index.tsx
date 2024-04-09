import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TouchableOpacityComponent, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ScreenOrientation from 'expo-screen-orientation';
import { AdContent, Question, AdComponentContent, AdPicture } from '../../screens/advertisement/advertisementDomains';
import { styles } from '../PictureSelectorQuestion/styles';

import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { getAdComponentImageByCode, getAdComponentTextByCode, getAdImageByCode, getAdTextByCode } from '../../screens/advertisement/adverstisementService';
import OverlayOptionsModal from '../OverlayOptionsModal';
import { adComponents } from '../../screens/advertisement/advertisementDefaults';
import { ERROR_PICTURE_SELECTOR_QUESTION_UNEXPECTED_QUESTION } from '../../screens/advertisement/advertisementParameters';


interface PictureSelectorQuestionProps {
    question: Question;
    adComponentContents: AdComponentContent[];
    onPictureSelection: (picture: AdPicture) => void;
    previousPictures?: AdPicture[];
    style?: StyleProp<ViewStyle>;
    shapeCustomStyle?: ViewStyle & TextStyle | undefined;
    imageCustomStyle?: ImageStyle | undefined;
    textCustomStyle?: TextStyle | undefined;     
  }

  interface OverlayModalState {
    isVisible: boolean;
    options: Array<{
      label: string;
      onPress: () => void;
    }>;
  }



export const PictureSelectorQuestion = ({ question, adComponentContents, onPictureSelection, previousPictures,
    style = {}, shapeCustomStyle, imageCustomStyle,
    textCustomStyle} : PictureSelectorQuestionProps) => {

  const [pickedImage, setPickedImage] = useState<{ [key: string]: ImagePicker.ImagePickerAsset }>({});
  const [overlayModal, setOverlayModal] = useState<OverlayModalState>({isVisible: false, options: []});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if(previousPictures && previousPictures.length > 0){
      const invalidPicture = previousPictures.find(picture => picture.questionCode !== question.code);
      
      if(!invalidPicture){
        console.error(ERROR_PICTURE_SELECTOR_QUESTION_UNEXPECTED_QUESTION(question.code.toString(), invalidPicture?.questionCode?.toString()));
        return;
      }

      const previousPickedObj: Record<string, ImagePicker.ImagePickerAsset> = previousPictures.reduce((result, picture) => {
        const base64 = picture.base64.split(',')[1];
        result[picture.choiceCode] = {
          uri: picture.uri,
          base64: base64,
        };
        return result;
      }, {});

      setPickedImage(previousPickedObj);
    }
  }, []);


  const updateImage = (choiceCode: string, pickedPicture: ImagePicker.ImagePickerAsset, sourceType?: number): void =>{
    sourceType = sourceType ? sourceType : 0;
    const picture: AdPicture = {
      //base64:  `data:image/jpeg;base64,${pickedPicture.base64}`,
      base64: '',
      questionCode: question.code,
      choiceCode: choiceCode,
      uri: pickedPicture.uri,
      sourceType: sourceType
    }
    setPickedImage((currentImages) => ({
      ...currentImages,
      [choiceCode]: pickedPicture,
    }));
    onPictureSelection(picture);
  };


  /*************************************************/
  //        LIBRARY
  /*************************************************/
  const openLibrary = async (choiceCode: string): Promise<void> => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Autorize o app a acessar suas fotos!");
      return;
    }
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          base64: true,
        });
      if (!result.canceled) {
        updateImage(choiceCode, result.assets[0], 1);        
      }
    } catch (error){
      console.error("Erro ao obter imagem da galeria ", error);
    }
  }


  /*************************************************/
  //        CAMERA
  /*************************************************/
 
  const openCamera = async (choiceCode) => {    
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Autorize o app a acessar a sua câmera!");
      return;
    }
    
    try{
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64:true,
      });
      
      if (!result.canceled) {
        updateImage(choiceCode, result.assets[0], 2);
      }
    } catch (error){
      console.error("Erro ao solicitar câmera ", error);
    }
  }
    
  const handleOnPress = (choiceCode: string) => {
    const options = [
      { label: getAdComponentTextByCode(adComponentContents, 1), onPress: () => { 
        setOverlayModal({ ...overlayModal, isVisible: false });
        setTimeout(() => openLibrary(choiceCode), 700); //Todo its not good. make it better soon.
        }
      },
      
      { label: getAdComponentTextByCode(adComponentContents, 2), onPress: () => { 
        setOverlayModal({ ...overlayModal, isVisible: false });
        setTimeout(() => openCamera(choiceCode), 700); //Todo its not good. make it better soon.
        }
      },
    ];

    setOverlayModal({
      isVisible: true,
      options: options,
    });
  };

  return (
    <View style={style}>
      <View style={styles.addOnsContainer}>
        {question.choices.map((option, index) => (
            <View style={[styles.addOnsRow, index % 2 !== 1 && styles.addOnFirstColumn]} key={option.code}>
              <TouchableOpacity onPress={() => handleOnPress(option.code)} >
                {pickedImage[option.code] ? (
                  <View style={[styles.shapeDefaults, shapeCustomStyle]}>
                    <Image source={{ uri: pickedImage[option.code].uri}} style={[styles.shapeDefaults, imageCustomStyle, styles.imagePreview]}/>
                    <View style={styles.overlayTextContainer}>
                      <Text style={[styles.textDefaults, textCustomStyle]}>{option.text}</Text>
                    </View>
                  </View>
                ) : (
                  <View style={[styles.shapeDefaults, shapeCustomStyle]}>
                    <Text style={[styles.textDefaults, textCustomStyle]}>{option.text}</Text>
                    {adComponentContents && <Image source={getAdComponentImageByCode(adComponentContents, 20)} style={styles.imageOverlay} />}
                  </View>
                )}
              </TouchableOpacity>
              </View>
        ))}
      </View>


      <OverlayOptionsModal 
        isVisible={overlayModal.isVisible} 
        options={overlayModal.options} 
        onClose={() => setOverlayModal({ ...overlayModal, isVisible: false })}
      />


    </View>
  );
}

