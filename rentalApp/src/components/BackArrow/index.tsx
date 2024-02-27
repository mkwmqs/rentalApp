import React from 'react';
import { Avatar, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const BackArrow = () => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 16, width: '10%' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={18} />
      </TouchableOpacity>
    </View>
  );
};