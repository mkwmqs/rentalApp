import { Avatar,  Center,  Divider, HStack, Image, ScrollView, VStack } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  Card } from 'native-base';
import { InfoBottom } from '../../components/InfoBottom';
import { NavBottom } from '../../components/NavBottom';

const Item = (iconName, text) => (
  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <Icon name={iconName} size={15} />
    </View>
    <Text style={{}}>{text}</Text>
  </TouchableOpacity>
);

export const ProfileScreen = () => {
  return (
    <View style={{flex:1}}>
    
      <ScrollView  overflow={'scrollY'} >
        <Text style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, fontWeight: 'bold', margin: 30, padding: 30, fontSize: 20 }}>Perfil</Text>
        <Center>
         <HStack space={5} alignItems="center">
          <Avatar bg="#D9D9D9" size="xl" source={{ uri: "" }} />
           <VStack space={2}>
               <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Nome</Text>
               <Text>Mostrar o Perfil</Text>
               </VStack>
               </HStack>
               </Center>
        <Divider mt={3} />

        <Center>
          <Card>
          <Image style={{ alignSelf: 'flex-end', padding: 20, marginVertical: 8 }}
      source={{ uri: 'https://img.freepik.com/fotos-premium/carro-amarelo-chevrolet-camaro-na-frente-de-uma-cena-de-montanha-ai-generativa_974533-29674.jpg?w=740' }} />
            <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}> Anuncie seu veículo na Ubiner </Text>
            <Text style={{ marginBottom: 0, textAlign: 'center' }}> Seu veículo trabalhando para você. Ganhe dinheiro com ele. </Text>
          </Card>
        </Center>

        <View>
          
          <Text style={{ fontWeight: 'bold', margin: 20, padding: 10 }}>Configurações</Text>

          {Item("payment", "Pagamentos")}
          <Divider mt={1} />
          {Item("info", "Informações pessoais")}
          <Divider mt={1} />
          {Item("attach-money", "Impostos")}
          <Divider mt={1} />
          {Item("security", "Login e Segurança")}
          <Divider mt={1} />
          {Item("accessibility", "Acessibilidade")}
          <Divider mt={1} />
          {Item("notifications", "Notificação")}
          <Divider mt={1} />
          {Item("privacy-tip", "Privacidade e Compartilhamento")}
          <Divider mt={1} />

          <Text style={{ fontWeight: 'bold', marginVertical: 20, margin: 20 }}>Atendimento</Text>

          {Item("phone", "Acesse a central de ajuda")}
          <Divider mt={1} />
          {Item("security", "Ajuda com problema de segurança")}
          <Divider mt={1} />
          {Item("report-problem", "Reportar um problema no veículo")}
          <Divider mt={1} />
          {Item("info", "Como funciona o Ubiner")}
          <Divider mt={1} />
          {Item("feedback", "Envie-nos o seu feedback")}
          <Divider mt={1} />

          <Text style={{ fontWeight: 'bold', marginVertical: 20, margin: 20 }}>Jurídico</Text>
          {Item("book", "Termos de Serviço")}
          <Divider mt={1} />
          {Item("book", "Política de Privacidade")}
          <Divider mt={1} />
          {Item("book", "Licenças de código aberto")}
          <Divider mt={1} />

          <Text> Sair da Conta</Text>
        </View>
        
        
      </ScrollView>
      
      </View>
    
  );
    }
