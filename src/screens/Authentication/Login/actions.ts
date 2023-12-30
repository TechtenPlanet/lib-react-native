import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native';
import { displayMsg } from 'lib_helpers';
import { useRef, useState } from 'react';

export const useActions = () => {
  const formRef = useRef();
  const [error, setError] = useState('');
  const navigator = useNavigation();

  const validateUser = async (register?: boolean) => {
    setError('');
    if (!formRef.current) {
      return;
    }
    const formData = await formRef.current.validateAndGetData();
    if (!formData) {
      return;
    }
    try {
      const user = new Parse.User();
      user.set('username', formData.email);
      user.set('password', formData.password);
      console.log(formData.username);
      register ? await user.signUp() : await user.logIn();
      navigator.navigate('Home');
    } catch (error: any) {
      setError('Error: ' + error.code + ' ' + error.message);
      displayMsg('Error: ' + error.code + ' ' + error.message);
      return;
    }
  };

  const login = () => {
    validateUser();
  };
  const register = () => {
    validateUser(true);
  };
  const forgetPassword = () => {
    navigator.navigate('ForgetPassword');
  };

  const showPrivacyPolicy = () => {
    navigator.navigate('PrivacyPolicy');
  };

  return { error, formRef, login, register, forgetPassword, showPrivacyPolicy };
};
