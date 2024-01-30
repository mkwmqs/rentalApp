import { Avatar, Divider, Text, VStack } from "native-base";
import React from 'react';
import { Botao } from "./botao";

interface ICardFormeProps {
    nome?: string;
    foto?: string;
    indentificacao?: string;
    cpf?: string;
    email?: string;
    telefone?: string;
    endereco?: string;
    cartaodecredito?: string;
    documentoAprovado?: boolean;
    foiRejeitado?: boolean;
  }
  
  
  export function CardInform({
    nome,
    foto, 
    cpf,
    indentificacao,
    telefone,
    email,
    endereco,
    cartaodecredito,
    foiRejeitado,
    documentoAprovado
  }:ICardFormeProps ){
    return(
      <VStack w="100%" bg={documentoAprovado ? 'gray.200': 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
        <VStack flexDir="row">
          <Avatar size="lg" source={{ uri: foto }} />
          <VStack pl="4">
            <Text fontSize="md" bold>{nome}</Text>
            <Text>{email}</Text>
            <Text>{telefone}</Text>
            <Text>{cpf}</Text>
            <Text>{indentificacao}</Text>
           < Text>{endereco}</Text>
           < Text>{cartaodecredito}</Text>
           <Text fontSize="bold">Informações Confirmadas</Text>
          </VStack>
        </VStack>
        <Divider mt={5} />
        <Botao mt={4}>
        {foiRejeitado ? 'Cancelar' : 'Continuar '}
      </Botao>
      </VStack>
    )
  }