import React from 'react';
import { TextInput, TextInputProps } from '../../../';
import { FormComponentProps } from '../../types';

interface ControllerItemProps {
  placeholder?: string;
  passwordMask?: boolean;
  textInputProps?: TextInputProps;
}

export const FormInput =
  ({ placeholder, passwordMask, textInputProps }: ControllerItemProps) =>
  ({ field: { onChange, value, onBlur } }: FormComponentProps) => {
    return (
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        secureTextEntry={passwordMask}
        {...textInputProps}
      />
    );
  };
