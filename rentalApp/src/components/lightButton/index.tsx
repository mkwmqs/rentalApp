import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';


interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function LightButton({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}