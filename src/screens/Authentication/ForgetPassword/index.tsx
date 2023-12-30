import React, { FC } from 'react';
import { forgetPasswordFormElements, forgetPasswordSchema, ForgetPasswordText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Button, Container, Logo, Text } from 'lib_components';
import { assets } from 'lib_styles';

export const ForgetPassword: FC = () => {
  const { forgetPassword, formRef } = useActions();
  return (
    <Container fullFlex padding={20}>
      <Container alignCenter fullFlex>
        <Logo imgSource={assets.images.forgetPassword} />
        <Text heading2>Forget Password</Text>
      </Container>
      <FormBuilder
        ref={formRef}
        schema={forgetPasswordSchema}
        formElements={forgetPasswordFormElements}
      />
      <Button onPress={forgetPassword} text={ForgetPasswordText} />
    </Container>
  );
};
