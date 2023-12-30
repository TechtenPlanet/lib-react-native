import React, { FC, memo } from 'react';
import { View, ActivityIndicator, Text, ViewStyle, TextStyle } from 'react-native';

import styles from './styles';

interface LoadingProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  full?: boolean;
}
export const Loading: FC<LoadingProps> = ({ style, textStyle, children, full }) => {
  return (
    <View style={[full ? styles.backgroundFull : styles.background, style]}>
      <ActivityIndicator size="large" color={styles.loadingColor} />
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};
export default memo(Loading);
