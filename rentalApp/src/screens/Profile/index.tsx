import { Avatar,  Center,  Divider, HStack, Image, ScrollView, VStack } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  Card } from 'native-base';

const renderMenuItem = (iconName, text) => (
  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <Icon name={iconName} size={15} />
    </View>
    <Text style={{}}>{text}</Text>
  </TouchableOpacity>
);

export const ProfileScreen = () => {
  return (
    <>
      <ScrollView>
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
          <Image style={{ alignSelf: 'flex-end', padding: 30, marginVertical: 10 }}
      source={{ uri: 'https://img.freepik.com/fotos-premium/carro-amarelo-chevrolet-camaro-na-frente-de-uma-cena-de-montanha-ai-generativa_974533-29674.jpg?w=740' }} />
            <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}> Anuncie seu veículo na Ubiner </Text>
            <Text style={{ marginBottom: 0, textAlign: 'center' }}> Seu veículo trabalhando para você. Ganhe dinheiro com ele. </Text>
          </Card>
        </Center>

        <View>
          
          <Text style={{ fontWeight: 'bold', margin: 20, padding: 10 }}>Configurações</Text>

          {renderMenuItem("payment", "Pagamentos")}
          <Divider mt={1} />
          {renderMenuItem("info", "Informações pessoais")}
          <Divider mt={1} />
          {renderMenuItem("attach-money", "Impostos")}
          <Divider mt={1} />
          {renderMenuItem("security", "Login e Segurança")}
          <Divider mt={1} />
          {renderMenuItem("accessibility", "Acessibilidade")}
          <Divider mt={1} />
          {renderMenuItem("notifications", "Notificação")}
          <Divider mt={1} />
          {renderMenuItem("privacy-tip", "Privacidade e Compartilhamento")}
          <Divider mt={1} />

          <Text style={{ fontWeight: 'bold', marginVertical: 20, margin: 20 }}>Atendimento</Text>

          {renderMenuItem("phone", "Acesse a central de ajuda")}
          <Divider mt={1} />
          {renderMenuItem("security", "Ajuda com problema de segurança")}
          <Divider mt={1} />
          {renderMenuItem("report-problem", "Reportar um problema no veículo")}
          <Divider mt={1} />
          {renderMenuItem("info", "Como funciona o Ubiner")}
          <Divider mt={1} />
          {renderMenuItem("feedback", "Envie-nos o seu feedback")}
          <Divider mt={1} />

          <Text style={{ fontWeight: 'bold', marginVertical: 20, margin: 20 }}>Jurídico</Text>
          {renderMenuItem("book", "Termos de Serviço")}
          <Divider mt={1} />
          {renderMenuItem("book", "Política de Privacidade")}
          <Divider mt={1} />
          {renderMenuItem("book", "Licenças de código aberto")}
          <Divider mt={1} />

          <Text style={{ marginVertical: 20, margin: 20 }}>Sair da Conta</Text>
        </View>
      </ScrollView>
      </>
    
  );
    }
