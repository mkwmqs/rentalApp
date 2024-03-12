import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { styles } from '../OwnedVehicleBox/styles';
import { AdContent, AdVehicle, Question } from '../../screens/advertisement/advertisementDomains';
import { ERROR_MESSAGE_NO_VEHICLE_FOUND, ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES } from '../../screens/advertisement/advertisementParameters';
import { getAdTextByCode } from '../../screens/advertisement/adverstisementService';


interface OwnedVehicleBoxProps {
  title?: string,
  vehicles: AdVehicle[],
  adContents: AdContent[],
  onAnswerSelected?: (vehicle: AdVehicle) => void;
  style?: StyleProp<ViewStyle>;
  isTouchable?: Boolean;
  vehicleSelection?: string[];
}



export const OwnedVehicleBox = ({ title, vehicles, adContents, onAnswerSelected, 
    style = {}, isTouchable, vehicleSelection} : OwnedVehicleBoxProps) => {
  const initialState: Boolean[] = vehicles ? new Array(vehicles.length).fill(false) : [];
  const [isSelected, setIsSelected] = useState(initialState);

  isTouchable = isTouchable !== undefined ? isTouchable : true;
  vehicleSelection = vehicleSelection || [];


  if (!vehicles || vehicles.length === 0 || vehicles.every((item) => item === undefined)) {
    return null;
  }

  const handleAnswerSelection = (vehicle: AdVehicle) => {
    if(onAnswerSelected){
        onAnswerSelected(vehicle);
    }
  };

  return (
    <View style={style}>

      {title && 
        <Text style={styles.title}>{title}</Text>
      }

    <View style={styles.boxes}>
        {vehicles.map((item, index) => (
            <TouchableOpacity
                key={item.plate}
                style={[styles.touchable, vehicleSelection?.includes(item.plate) && styles.selectedTouchable]}
                onPress={() => handleAnswerSelection(item)}
                disabled={!isTouchable}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.makeModel}>{item.make + ' ' + item.model}</Text>
                    <Text style={styles.plate}>{getAdTextByCode(adContents, 31) + ' ' + item.plate}</Text>
                    <Text style={styles.plate}>{getAdTextByCode(adContents, 32) + ' ' + item.yearBuilt
                        + '   ' + getAdTextByCode(adContents, 33) + ' ' + item.color}</Text>
                </View>
            </TouchableOpacity>
            ))}
    </View>

    </View>
  );
};
