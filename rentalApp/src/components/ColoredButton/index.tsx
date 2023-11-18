import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { coloredStyles } from './styles';


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
}

export function ColoredButton({ title,color, ...rest }: ButtonProps) {
 
  const styles = coloredStyles(color);

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