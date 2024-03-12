import React from 'react';
import { Avatar, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Touchable, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { AdInsertionRoutes } from '../../routes/AdInsertionRoutes';

interface BackArrowProps {
  isScreenWithoutTopBorder?: boolean;
  screen?: string;
}


export const BackArrow: React.FC<BackArrowProps> = ({ isScreenWithoutTopBorder = false, screen }) => {
  const navigation = useNavigation<NavigationProp>();  

  const handleOnPress = () => {
    if(!screen){
      navigation.goBack(); 
    } else{
      navigation.navigate(screen);
    }
  }

  return (
    <View style={isScreenWithoutTopBorder ? styles.isScreenWithoutTopBorder : styles.default}>
      <TouchableOpacity onPress={handleOnPress}>
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>
    </View>
  );
};


