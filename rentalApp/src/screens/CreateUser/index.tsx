import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { InfoBottom } from '../../components/InfoBottom';
import { styles } from './styles';
import { CheckBox } from 'react-native-elements';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, dbFirestore } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { NavBottom } from '../../components/NavBottom';

interface createUserProps {
  name: string,
  email: string,
  passwordConfirmation: string,
  password: string,
  phone: string
}

export function CreateUser() {
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>()
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
 

  const { control, handleSubmit, formState: { errors } } = useForm<createUserProps>({})

  const onBlurPhoneHandler = (value: string, setValue: (input: string) => void) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length === 11) {
      const formattedPhoneNumber = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
      setValue(formattedPhoneNumber);
    } else {
      setValue(value);
    }
  };


 

  const handleSignIn: SubmitHandler<createUserProps> = async (data: createUserProps) => {
    try {
      if (data) {
        console.log(data)
      if (data.passwordConfirmation === data.password){

      
        await createUserWithEmailAndPassword(auth, data.email, data.password)

        const docRef = await addDoc(collection(dbFirestore, "user"), {
          name: data.name,
          phone: data.phone,
          email: data.email,
          
        })
        console.log("Document written with ID: ", docRef.id);
        navigator.navigate("PhoneConfirmation", { formData: data.phone })
        
      } else {
        alert ('A confirmação da senha não são iguais!')
    }     
  }
    } catch (err) {
      console.log(err)
      alert(err)
    }
    
       
  }

  function handleReturnScreen() {
    navigator.navigate('Welcome')
  }
  function handleCheckboxToggle() {
    setIsChecked(!isChecked)
  }
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <
      >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View>
          <Icon style={{ paddingLeft: 24 }} name="arrow-left" size={18} onPress={handleReturnScreen} />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}

          style={styles.content}>
          <Text style={styles.header}>
            Criar conta
          </Text>
          <View style={styles.formWrapper}>
            <Text style={styles.text}>Nome Completo</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder='Digite seu nome completo'
                />
              )}
            />

            <Text style={styles.text}>Telefone</Text>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={() => onBlurPhoneHandler(value, onChange)}
                  value={value}
                  keyboardType="numeric"
                  placeholder='Digite seu telefone'
                />
              )}
            />

            

            <Text style={styles.text}>E-mail</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  keyboardType="email-address"
                  placeholder='Digite seu E-mail'
                />
              )}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              defaultValue=""
            />


            <Text style={styles.text}>Crie sua senha</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, { marginBottom: 0 }]}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite sua senha Bibipi"
                  secureTextEntry={!isChecked}
                />
              )}
            />


{/* // era data de nascimento */}
           <Text style={styles.text}>Confirme a senha</Text>
            <Controller
              control={control}
              name="passwordConfirmation"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder='Confirme sua Senha'
                  secureTextEntry={!isChecked}
                  
                />
              )}
            />

            <CheckBox
              title="Mostrar senha"
              checked={isChecked}
              onPress={handleCheckboxToggle}
              containerStyle={styles.checkboxContainer}
            />

            <ColoredButton
              color={color.light_blue}
              title='Continuar'
              // onPress={handleSubmit(handleSignIn)}
            />

            <Text style={{padding:4}}>Ao selecionar Continuar, você aceito os Termos de Serviços, os Termos de Serviços de Pagamentos, a Política de Não Discriminação e reconheço a Política de Privacidade.</Text>
          </View>

        </ScrollView>

      </KeyboardAvoidingView>
      {isKeyboardOpen ? null : <InfoBottom /> } 
      
      <NavBottom/>
      
    </>
    
  )
}