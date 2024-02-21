import React from 'react';
import { Avatar, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const BackArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon style={{ paddingLeft: 24 }} name="arrow-left" size={18} />
    </TouchableOpacity>
  );
};