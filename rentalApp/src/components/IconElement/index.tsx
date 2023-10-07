import { View, Text } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from './styles'


type IconsProps = PropsWithChildren<{name:string}>

export function IconElement({name}:IconsProps) {
  return (
    <View style={styles.container}>
        <Icon name={name} size={18} />
    </View>
  )
}