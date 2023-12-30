import React, { FC } from 'react';
import { registerSchema, registerFormElements, SubmitText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Container, Logo } from 'lib_components';

export const Register: FC = () => {
  const { register } = useActions();
  return (
    <Container fullFlex padding={20}>
      <Container alignCenter fullFlex>
        <Logo />
      </Container>
      <FormBuilder
        onSubmit={register}
        schema={registerSchema}
        formElements={registerFormElements}
        submitText={SubmitText}
      />
    </Container>
  );
};
