import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Divider, ScrollView, Text, View } from 'native-base';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ColoredButton } from '../../components/ColoredButton';
import { InfoBottom } from '../../components/InfoBottom';
import color from '../../styles/color';
import { styles } from './styles';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState("email");
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();


  const handleAppleLogin = () => {

  };

  const handleGoogleLogin = () => {

  };

  const handleFacebookLogin = () => {

  };



  function handleReturnScreen() {
    navigator.navigate('Welcome')
  }

  function handleRadioLogin(option: string) {
    setLoginType(option)
  }


  return (
    <>

      <ScrollView>
        <View style={{ marginVertical: 24, paddingHorizontal: 8 }}>
          <Icon style={{ paddingLeft: 22 }} name="arrow-left" size={18} onPress={handleReturnScreen} />
        </View>
        <View style={{ marginVertical: 18, paddingHorizontal: 8 }} >
          <Text style={{ marginTop: 12 }}>Email</Text>
          <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'grey', padding: 16 }}>

            <TextInput
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <Text>Senha </Text>
          <View style={{ marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: 'grey', padding: 16 }}>

            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View>

          </View>

          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 4 }}>Enviaremos uma mensagem para você confirmando o seu número. Podem ser aplicadas tarifas padrões de dados e mensagens.</Text>

          <View style={styles.radioGroup}>
            <View style={styles.radioRow}>
              <Text style={styles.radioText}>WhatsApp</Text>
              <TouchableOpacity
                onPress={() => handleRadioLogin('whatsapp')}
              >

                <View style={styles.radio} >
                { loginType === 'whatsapp' ?  <View style={styles.radioSelected} /> : null}  
                </View>
              </TouchableOpacity>

            </View>
            <View style={styles.radioRow}>
              <Text style={styles.radioText}>Email</Text>
              <TouchableOpacity
                onPress={() => handleRadioLogin('email')}
              >
              <View style={styles.radio} >
               { loginType === 'email' ?  <View style={styles.radioSelected} /> : null}  
                </View>
              </TouchableOpacity>

            </View>
          </View>



          <TouchableOpacity>
            <Text style={{ textAlign: 'center', padding: 4 }}>Esqueceu a senha? Clique aqui</Text>
          </TouchableOpacity>

          <View style={{ padding: 4, marginTop: 2, }}>
            <ColoredButton color={color.green} title='Continuar' />
          </View>

          <Divider mt={20} style={{ width: '100%' }} />
          <TouchableOpacity style={{ alignItems: 'center', borderRadius: 16, borderWidth: 1, borderColor: 'grey', padding: 14, marginTop: 14, }} onPress={handleAppleLogin}>
            <Text>
              <Icon name="apple" /> <Text style={{ fontWeight: 'bold' }}>Continuar com Apple</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', borderRadius: 16, borderWidth: 1, borderColor: 'grey', padding: 14, marginTop: 14, }} onPress={handleGoogleLogin}>
            <Text>
              <Icon name="google" /> <Text style={{ fontWeight: 'bold' }}>Continuar com Google</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', borderRadius: 16, borderWidth: 1, borderColor: 'grey', padding: 14, marginTop: 14, }} onPress={handleFacebookLogin}>
            <Text>
              <Icon name="facebook" /><Text style={{ fontWeight: 'bold', }}> Continuar com Facebook</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ gap: 8, padding: 10, margin: 10 }}>
          <InfoBottom />
        </View>
      </ScrollView>
    </>
  );
};

