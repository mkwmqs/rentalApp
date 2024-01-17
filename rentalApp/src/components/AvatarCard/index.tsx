import React from 'react';
import { Avatar, Text, View } from "native-base";
import { styles } from "./style";

export const AvatarCard = () => {
      return (
        <View style={styles.card}>
           <Avatar
            source={{ uri: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg?w=740' }}
          />
            <Text style={styles.sectionHeader}>Nome</Text>
            <Text>Renter</Text>
        </View>
      );
    
      }