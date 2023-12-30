import { FieldValues } from 'react-hook-form';

type onSubmitType = (data: FieldValues) => void;

export const useActions= () => {
  const register: onSubmitType = data => {
    console.log(data);
  };

  return { register };
};
