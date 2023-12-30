import * as React from 'react';
import { Image, StyleProp, ImageSourcePropType, ImageStyle } from 'react-native';
import styles from './styles';
import { assets } from 'lib_styles';

interface LogoProps {
  style?: StyleProp<ImageStyle>;
  imgSource?: ImageSourcePropType;
}
export const Logo = ({ style, imgSource }: LogoProps) => {
  return <Image source={imgSource ?? assets.images.logo} style={[styles.appIcon, style]} />;
};

export default Logo;
