//external ui imports
import React, { memo, useState } from "react";
import { TouchableOpacity, TextInput as Input } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

const AKTextInput = ({
  style,
  inputTextStyle,
  iconName,
  iconSize = styles.iconDefaultSize,
  iconColor = styles.iconDefaultColor,
  onIconPressed,
  iconRightName,
  iconRightSize = styles.iconDefaultSize,
  iconRightColor = styles.iconDefaultColor,
  onIconRightPressed,
  placeholder,
  defaultValue,
  value,
  secureTextEntry = false,
  onChangeText,
  editable = true,
  keyboardType,
  error,
  onFocus,
  onBlur,
  autoFocus,
  underlineColorAndroid,
  autoCapitalize,
  onPress,
}) => {
  const [passwordHidden, setPasswordHidden] = useState(secureTextEntry);
  return (
    <TouchableOpacity
      style={[error ? styles.containerError : styles.container, style]}
      onPress={onPress}
    >
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={iconSize}
          color={iconColor}
          onPress={onIconPressed}
        />
      )}
      <Input
        style={error ? styles.error : [styles.input, inputTextStyle]}
        placeholder={error ? error : placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        editable={editable}
        autoCapitalize={autoCapitalize}
        value={error && value ? error : value}
        keyboardType={keyboardType}
        secureTextEntry={error ? false : passwordHidden}
        placeholderTextColor={
          error
            ? styles.placeHolderTextColor.error
            : styles.placeHolderTextColor.default
        }
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        underlineColorAndroid={underlineColorAndroid}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPressIn={() => setPasswordHidden(false)}
          onPressOut={() => setPasswordHidden(true)}
        >
          <Icon
            style={styles.iconRight}
            name={"remove-red-eye"}
            size={styles.iconDefaultSize}
            color={styles.iconDefaultColor}
          />
        </TouchableOpacity>
      )}
      {iconRightName && (
        <Icon
          style={styles.iconRight}
          name={iconRightName}
          size={iconRightSize}
          color={iconRightColor}
          onPress={onIconRightPressed}
        />
      )}
    </TouchableOpacity>
  );
};

export default memo(AKTextInput);
