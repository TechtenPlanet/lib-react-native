import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Container from '../Container';

import styles from './styles';

interface DividerProps {
  vertical?: boolean;
  horizontal?: boolean;
  spacing?: number;
  style?: StyleProp<ViewStyle>;
}
export const Divider = (props: DividerProps) => {
  const spacingStyle: StyleProp<ViewStyle> = props.vertical
    ? { marginHorizontal: props.spacing }
    : { marginVertical: props.spacing };
  return (
    <Container
      style={[
        props.vertical ? styles.verticalDivider : styles.horizontalDivider,
        props.style,
        props.spacing && spacingStyle,
      ]}
    />
  );
};
export default memo(Divider);
