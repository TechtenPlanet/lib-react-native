import { FormElementProps, FORMTYPES } from 'lib_forms';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Enter a valid Email').required('Please enter a valid email address'),
  password: yup.string().required('Please enter a valid password'),
});

export const loginFormElements: FormElementProps[] = [
  {
    type: FORMTYPES.INPUT,
    name: 'email',
    placeholder: 'Enter email',
  },
  {
    type: FORMTYPES.INPUT,
    name: 'password',
    placeholder: 'Enter password',
    passwordMask: true,
  },
];

export const LoginText = 'Login';
export const RegisterText = 'Register';
