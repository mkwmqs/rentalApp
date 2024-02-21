import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../AdPicturesInsertion/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BackArrow } from '../../../components/BackArrow';



export function AdPicturesInsertion() {


  return (
    <View style={styles.mainContainer}>

        <BackArrow/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

            <Text style={styles.header}>
                Vamos incluir as fotos do seu veículo
            </Text>

        </ScrollView>

           <View style={styles.forwardButton}>
                <ColoredButton 
                    title={'Continuar'} 
                    color={color.light_blue}
                    />
            </View>
        <NavBottom/>
    </View>

  );
    
  
};
