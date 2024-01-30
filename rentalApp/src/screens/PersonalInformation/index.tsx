import { Divider, Icon, Input, ScrollView, Text, View } from "native-base";
import React, { useState } from "react";
import { Button } from 'native-base';
import { ColoredButton } from "../../components/ColoredButton";
import color from "../../styles/color";




export const PersonalInformation = () => {
  

  const [name, setName] = useState('Raimundo da silva nonato')
  const [cpf, setCpf] = useState('123.123.123-45')
  const [email, setEmail] = useState('Telrex@ubiner.com.br')
  const [fone, setFone] = useState('+55 (**) *****-3003 ')
  const [dataNascimento, setDataNascimento] = useState('01/01/2001')
  const [address, setAddress] = useState('SQN 713 bloco Q apartamento 32 Cep 71.300.098   Brasília - DF')
  const [situacaoreceita, setSituacaoreceita] = useState('Regular')

  const [isDisabled, setIsDisabled] = useState(true)

function handleEdit(isDisabled){
  setIsDisabled(!isDisabled)
}


  return (


    <ScrollView>
  <View style={{ flexDirection: 'column', padding: 30, gap:12}}>

    <Text style={{ fontWeight: 'bold', marginBottom: 10, padding:20 }}>Informações Pessoais</Text>

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Nome:</Text>
      <Text>{name}</Text>
    </View>
    <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>CPF:</Text>
      <Text>{cpf}</Text>
    </View>
    <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>Data de Nascimento:</Text>
      <Text>{dataNascimento}</Text>
    </View>
    <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>Telefone:</Text>
      <Text>{fone}</Text>
    </View>

     <View>
     <Button style={{ borderColor: 'white' }}>
      <Text style={{ color: 'white' }}>Adicione número de telefone</Text>
     </Button>
     </View>
     <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>E-mail:</Text>
      <Text>{email}</Text>
    </View>
    <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>Endereço Residencial:</Text>
      <Input isDisabled={isDisabled}>{address}</Input>
    </View>
    <View>
      <Button onPress={handleEdit}>
        Editar
      </Button>
    </View>

    <Divider mt={3} />

    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 5 }}>Situação na Receita Federal:</Text>
      <Text>{situacaoreceita}</Text>
    </View>
    <View style={{paddingHorizontal:10}}>
        <ColoredButton color={color.light_blue} title='Confirmar Dados' />
      </View>
  </View>
</ScrollView>

  );
};

 