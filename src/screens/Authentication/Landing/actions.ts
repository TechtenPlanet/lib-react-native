import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { AUTHOPTIONS } from './constant';
// import {useUserStore} from 'lib_hooks/useStore';

export default function useActions() {
  const navigation = useNavigation();
  // const userStore = useUserStore();

  const handleAuth = useCallback(
    (authOption: AUTHOPTIONS) => () => {
      switch (authOption) {
        case AUTHOPTIONS.LOGIN:
          navigation.navigate('Login');
          break;
        case AUTHOPTIONS.REGISTER:
          navigation.navigate('Register');
          break;
      }
    },
    [navigation]
  );
  return {
    handleAuthLogin: handleAuth(AUTHOPTIONS.LOGIN),
    handleAuthRegister: handleAuth(AUTHOPTIONS.REGISTER),
  };
}
