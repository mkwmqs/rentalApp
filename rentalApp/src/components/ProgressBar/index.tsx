import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';

interface IProgressProps {
  data: number
  widthBar: number
  star: number
}

export function ProgressBar({ data, widthBar, star }: IProgressProps) {
  const [progress, setProgress] = useState(new Animated.Value(0))

  useEffect(() => {
    calculateProgress()
    return Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [])

  function calculateProgress() {
    const progressRelative = (data / 100) * widthBar
    setProgress(new Animated.Value(progressRelative))
  }

  return (
    <View style={styles.info}>
      <Text style={styles.text}> {star} star </Text>
      <View>
        <View style={[styles.container, { width: widthBar }]} >
          <Animated.View style={[styles.bar, { width: progress }]} />
        </View>
      </View>
      <View>
        <Text>{data} %</Text>
      </View>
    </View>
  );
};
