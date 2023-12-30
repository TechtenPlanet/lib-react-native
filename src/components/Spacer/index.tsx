import React from 'react';
import {View} from 'react-native';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer: React.FC<Props> = ({height = 16, width}) => {
  return <View style={{height, width}} />;
};

export default Spacer;
