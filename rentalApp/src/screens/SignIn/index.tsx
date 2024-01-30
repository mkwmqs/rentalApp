import React, { useState } from 'react';
import { Center, Divider, Radio, Stack } from 'native-base';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { InfoBottom } from '../../components/InfoBottom';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAppleLogin = () => {
    
  };

  const handleGoogleLogin = () => {
   
  };

  const handleFacebookLogin = () => {
    
  };

 

  return (
    <>
    <View >
      <View style={{gap:8, borderRadius:10, borderWidth: 1,borderColor: 'grey', padding:20, margin:20}}>
      <Text >Email:</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
     

      <View style={{gap:10, borderRadius:10, borderWidth: 1,borderColor: 'grey', padding:20, margin:20}}>
      <Text>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>

      {/* <TouchableOpacity
        style={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginTop: 10,
        }}
        // onPress={handleEmailLogin}
      >
        
      </TouchableOpacity> */}
      <Text style={{textAlign: 'center',fontWeight: 'bold' }}>Enviaremos uma mensagem para você confirmando o seu número. Podem ser aplicadas tarifas padrões de dados e mensagens.</Text>

      {/* <Center>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
      <Stack direction={{
      base: "column",
      md: "row"
    }} alignItems={{
      base: "flex-start",
      md: "center"
    }} space={4} w="75%" maxW="300px">
        <Radio value="1" colorScheme="red" size="sm" my={1}>
          Small
        </Radio>
        <Radio value="2" colorScheme="green" size="md" my={1}>
          Medium
        </Radio>
        <Radio value="3" colorScheme="yellow" size="lg" my={1}>
          Large
        </Radio>
      </Stack>
    </Radio.Group>
    </Center> */}
<View style={{padding: 8,marginTop: 4,}}>
<ColoredButton color={color.light_blue} title='Continuar' />
</View>

      <Divider mt={20}  style={{ width: '100%' }} />
      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleAppleLogin}>
        <Text>
          <Icon name="apple" /> <Text style={{fontWeight: 'bold'}}>Continuar com Apple</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleGoogleLogin}>
        <Text>
          <Icon name="google" /> <Text style={{fontWeight: 'bold'}}>Continuar com Google</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:16, borderWidth: 1,borderColor: 'grey',padding: 12,marginTop: 12,}} onPress={handleFacebookLogin}>
        <Text>
          <Icon name="facebook" /> <Text style={{fontWeight: 'bold',}}> Continuar com Facebook</Text>
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{gap:8, padding:10, margin:10}}>
    <InfoBottom/>
    </View>
    </>
  );
};

