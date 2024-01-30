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
// import { auth, dbFirestore } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

interface createUserProps {
  name: string,
  email: string,
  date: string,
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


  const onBlurDate = (value: string, setValue: (input: string) => void) => {
    if (value.length === 6) {
      const day = value.slice(0, 2);
      const month = value.slice(2, 4);
      const year = value.slice(4);
      setValue(`${day}/${month}/19${year}`)
    } else if (value.length === 8) {
      const day = value.slice(0, 2);
      const month = value.slice(2, 4);
      const year = value.slice(4);
      setValue(`${day}/${month}/${year}`)
    } else if (value.length === 10) {
      const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
      if (dateRegex.test(value)) {
        setValue(value)
      } else {
        alert('Digite apenas numeros do seu nascimento')
      }
    } else {
      alert('Digite apenas numeros do seu nascimento')
    }
  };

  // const handleSignIn: SubmitHandler<createUserProps> = async (data: createUserProps) => {
  //   try {
  //     if (data) {
  //       console.log(data)
   
  //       await createUserWithEmailAndPassword(auth, data.email, data.password)

  //       const docRef = await addDoc(collection(dbFirestore, "user"), {
  //         name: data.name,
  //         birthday: data.date,
  //         phone: data.phone
  //       })
  //       console.log("Document written with ID: ", docRef.id);
  //       navigator.navigate("PhoneConfirmation", { formData: data.phone })
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     alert(err)
  //   }


  // }

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

            <Text style={styles.text}>Data de Nascimento</Text>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={() => onBlurDate(value, onChange)}
                  value={value}
                  placeholder='Ex. 01/10/2023'
                  maxLength={10}
                  keyboardType="numeric"
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
                  placeholder="Digite sua senha ubinner"
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
          </View>

        </ScrollView>

      </KeyboardAvoidingView>
      {isKeyboardOpen ? null : <InfoBottom />}
    </>
  )
}