import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import styles from './styles';

export const CenteringButtonMap = (props) => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.centeringButton}>
      <Icon name="my-location" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default CenteringButtonMap;
