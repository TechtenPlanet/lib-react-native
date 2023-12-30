import { FormElementProps, FORMTYPES } from 'lib_forms/types';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Please enter a valid name'),
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Please enter a valid email address'),
  password: yup.string().required('Please enter a valid password')
});

export const registerFormElements: FormElementProps[] = [
  {
    name: 'name',
    placeholder: 'Enter your name',
    type: FORMTYPES.INPUT,
  },
  {
    name: 'email',
    placeholder: 'Enter email',
    type: FORMTYPES.INPUT,
  },
  {
    name: 'password',
    placeholder: 'Enter password',
    type: FORMTYPES.INPUT,
    passwordMask: true
  }
];

export const SubmitText = 'Sign Up';