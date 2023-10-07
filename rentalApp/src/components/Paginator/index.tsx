import { View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface IpaginatorProp {
  data: any;
  scrollX: Animated.Value
}

export function Paginator({ data, scrollX }: IpaginatorProp) {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i-1)*width,i*width,(i+1)*width]
        const dotWith = scrollX.interpolate({
          inputRange,
          outputRange:[10,20,10],
          extrapolate:'clamp'
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange:[0.3,1,0.3],
          extrapolate:'clamp'
        })
        return <Animated.View style={[styles.dot, { width: dotWith,opacity }]} key={i.toString()} />
      })}
    </View>
  )
}