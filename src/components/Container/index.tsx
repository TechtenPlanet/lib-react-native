import * as React from 'react';
import { SafeAreaView, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DefaultStyleProps, defaultStyles, defaultStylesOptions } from 'lib_styles';

interface OwnProps {
  children?: React.ReactNode;
  isSafeAreaView?: boolean;
}

type ContainerProps = OwnProps & DefaultStyleProps & TouchableOpacityProps;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, style, isSafeAreaView, ...rest } = props;
  const {
    colors: { card },
  } = useTheme();
  return (
    <TouchableOpacity
      disabled={!props.onPress}
      style={[{ backgroundColor: card }, style, ...(defaultStyles(props) as any)]}
      {...rest}
    >
      {isSafeAreaView ? (
        <SafeAreaView style={defaultStylesOptions.fullFlex}>{children}</SafeAreaView>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Container;
