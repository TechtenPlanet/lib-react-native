import { StackScreen } from 'lib_navigation';
import { Landing } from './Landing';
import { Login } from './Login';
import { Register } from './Register';
import { ForgetPassword } from './ForgetPassword';

export const Authentication: StackScreen = {
  name: 'Authentication',
  stackScreens: [
    {
      name: 'Login',
      component: Login
    },
    {
      name: 'ForgetPassword',
      component: ForgetPassword,
      options: {
        headerShown: true,
        title:''
      },
    },
  ],
};
