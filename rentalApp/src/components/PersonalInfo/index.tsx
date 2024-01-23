import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {  Divider, Text, VStack } from "native-base";



interface ICardFormeProps {
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    telefone?: string;
    email?: string;
    endereco?: string;
    situacaoreceita?: boolean;
    foiRejeitado?: boolean;
  }
  
  
  export function PersonalInformation({
    nome,
    cpf,
    dataNascimento,
    telefone,
    email,
    endereco,
    foiRejeitado,
    situacaoreceita
  }:ICardFormeProps ){
    return(
      <VStack w="100%" bg={situacaoreceita ? 'gray.200': 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
        <VStack flexDir="row">
          <VStack pl="4">
            <Text fontSize="md" bold>{nome}</Text>
            <Text>{email}</Text>
            <Text>{telefone}</Text>
            <Text>{cpf}</Text>
            <Text>{dataNascimento}</Text>
           < Text>{endereco}</Text>
           < Text>{situacaoreceita}</Text>
          </VStack>
        </VStack>
        <Divider mt={5} />
       
      </VStack>
    )
  }