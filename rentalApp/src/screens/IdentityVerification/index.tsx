import { Box, Center, CheckIcon, FormControl, Select, Radio, NativeBaseProvider,View, Text, Progress, WarningOutlineIcon, ScrollView, } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';




const Press = () => {
 
  console.log('Ícone clicado!');
  
};
export const IdentiVerification = () => {

  return (
    <>
    
    <View style={{ flex: 1, padding: 20, justifyContent: 'center',alignItems: 'center', gap: 18}}>
      <Text style={{fontSize: 18,fontWeight: 'bold',marginBottom: 10,textAlign: 'left'}}>Entre com seu documento de identificação, comprovante de residência e sua foto.</Text>

      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Selecione</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Faça sua Escolha" placeholder="país/região de emissão
    Brasil" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Brasil" value="ux" />
          
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Por favor, faça uma seleção!
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
          <Radio value="fisico" my={1}>
         Documento Físico 
          </Radio>
          <Radio value="digital" my={2}>
          Documento Digital
          </Radio>
        </Radio.Group>
      </FormControl>

      <Text>documento.pdf          100%</Text>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 10 }}> Download     70%  </Text>
          <TouchableOpacity onPress={Press}>
          <Icon name="upload" size={20} color="#000" />
         </TouchableOpacity>
         </View>
         </View>

      <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress value={45} mx="4" />
      </Box>
    </Center>
     
    <FormControl>
        <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
          <Radio value="habilitacao" my={1}>
          Carteira de Habilitação 
          </Radio>
          <Radio value="residencia" my={2}>
          Comprovante de residência
          </Radio>
        </Radio.Group>
      </FormControl>

      <View style={{ padding: 25, alignItems: 'center',backgroundColor: '#D9D9D940', marginTop: 25,borderRadius: 10 }}>
        <Text>Seu documento de identificação será processado de acordo com nossa Politica de Privacidade e não será compartilhado com seu Hoster ou Renter.</Text>
      </View>

      <View style={{paddingHorizontal:10}}>
        <ColoredButton color={color.light_blue} title='Continuar' />
      </View>
    </View>
  
    
    </>
    
  );
};


