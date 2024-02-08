import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function AutoSelector() {
  const img  = require('../../../assets/banner.png')
  return (
    
    <View style={styles.container}>
      <Image source={img} style={styles.img}  />
    </View>
  )
}