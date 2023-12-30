import React, { useState } from 'react';
import {
  TouchableOpacity,
  TextInput as Input,
  StyleProp,
  KeyboardTypeOptions,
  ColorValue,
  TextStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export interface TextInputProps {
  containerStyle?: StyleProp<TouchableOpacity>;
  style?: StyleProp<TextStyle>;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconRightName?: string;
  iconRightSize?: number;
  iconRightColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  defaultValue?: string;
  value?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  underlineColorAndroid?: ColorValue;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onPress?: () => void;
  onIconPressed?: () => void;
  onIconRightPressed?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
}
export const TextInput = (props: TextInputProps) => {
  const [passwordHidden, setPasswordHidden] = useState(props.secureTextEntry);
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
    >
      {props.iconName && (
        <Icon
          style={styles.icon}
          name={props.iconName}
          size={props.iconSize ?? styles.iconDefaultSize}
          color={props.iconColor ?? styles.iconDefaultColor}
          onPress={props.onIconPressed}
        />
      )}
      <Input
        style={[styles.input, props.style]}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChangeText={props.onChangeText}
        editable={props.editable}
        autoCapitalize={props.autoCapitalize}
        value={props.value}
        keyboardType={props.keyboardType}
        secureTextEntry={passwordHidden}
        placeholderTextColor={styles.placeHolderTextColor.default}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoFocus={props.autoFocus}
        underlineColorAndroid={props.underlineColorAndroid}
      />
      {props.secureTextEntry && (
        <TouchableOpacity
          onPressIn={() => setPasswordHidden(false)}
          onPressOut={() => setPasswordHidden(true)}
        >
          <Icon
            style={styles.iconRight}
            name={'remove-red-eye'}
            size={styles.iconDefaultSize}
            color={styles.iconDefaultColor}
          />
        </TouchableOpacity>
      )}
      {props.iconRightName && (
        <Icon
          style={styles.iconRight}
          name={props.iconRightName}
          size={props.iconRightSize ?? styles.iconDefaultSize}
          color={props.iconRightColor ?? styles.iconDefaultColor}
          onPress={props.onIconRightPressed}
        />
      )}
    </TouchableOpacity>
  );
};
