import { FormElementProps, FORMTYPES } from 'lib_forms';
import * as yup from 'yup';

export const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email('Enter a valid Email').required('Please enter a valid email address'),
});

export const forgetPasswordFormElements: FormElementProps[] = [
  {
    type: FORMTYPES.INPUT,
    name: 'email',
    placeholder: 'Enter email',
  },
];

export const ForgetPasswordText = 'Request New Password';
