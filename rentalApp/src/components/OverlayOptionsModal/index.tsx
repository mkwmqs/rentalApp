import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../../styles/color';

interface Option {
    label: string;
    onPress: () => void;
  }
  
  interface OverlayOptionsModalProps {
    isVisible: boolean;
    options: Option[];
    onClose?: () => void;
  }
  


const OverlayOptionsModal: React.FC<OverlayOptionsModalProps> = ({ isVisible, options, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => {
              option.onPress();
              if(onClose) {onClose();}
            }}>
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    borderRadius: 10,
    width: '100%',
    padding: 10,
    elevation: 2,
    //backgroundColor: '#2196F3',
    backgroundColor: color.light_green,
    marginTop: 20,
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    //padding: 1
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    color: color.light_green,
    fontWeight: 'bold',
  },
});

export default OverlayOptionsModal;
