import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function CommentCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Simplesmente Perfeito, carro cheiroso, novinho, eu super recomendo</Text>
        </View>
        <View style={styles.content}>
          <View >
            <Image source={require('../../../assets/domestic-dog_thumb_square.jpg')} style={styles.thumbnail} />
          </View>
          <View>
            <Text style={styles.text}>Mariana</Text>
            <Text style={styles.subtext}>Há 1 semana</Text>
          </View>
        </View>
      </View>
    </View>
  )
}