import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import useThemeColors from 'lib_hooks/useThemeColors';
import Text from '../Text';
import styles from './styles';

export const OfflineNotice = () => {
  const {danger, text} = useThemeColors();
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={[styles.container, {backgroundColor: danger}]}>
        <Feather name="wifi-off" size={20} color={text} style={styles.icon} />
        <Text>No internet Connection!</Text>
      </View>
    );
  return null;
};

export default OfflineNotice;
