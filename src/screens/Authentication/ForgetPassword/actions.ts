import { displayMsg } from 'lib_helpers';
import Parse from 'parse/react-native';
import { useRef } from 'react';

export const useActions = () => {
  const formRef = useRef();
  const forgetPassword = async () => {
    if (!formRef.current) {
      return;
    }
    const formData = await formRef.current.validateAndGetData();
    if (!formData) {
      return;
    }
    try {
      Parse.User.requestPasswordReset(formData.email);
    } catch (error: any) {
      displayMsg('Error: ' + error.code + ' ' + error.message);
      return;
    }
  };
  return { forgetPassword, formRef };
};
