import React from 'react';
import { View, ViewStyle, StyleProp, StyleSheet } from 'react-native';

interface StraightLineSeparatorProps {
  style?: StyleProp<ViewStyle>;
}

export const StraightLineSeparator: React.FC<StraightLineSeparatorProps> = ({ style }) => {
  return <View style={[styles.separator, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 2.0,
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 24,
  },
});
