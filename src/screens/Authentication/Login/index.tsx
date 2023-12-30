import React, { FC } from 'react';
import { loginFormElements, loginSchema, LoginText, RegisterText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Button, Container, Logo, Spacer, Text } from 'lib_components';
import { assets } from 'lib_styles';

export const Login: FC = () => {
  const { formRef, error, login, register, forgetPassword, showPrivacyPolicy } = useActions();
  return (
    <Container fullFlex padding={20} isSafeAreaView>
        <Container alignCenter fullFlex>
          <Logo imgSource={assets.images.signin} />
          <Text heading2>Welcome!</Text>
          <Spacer />
          <Text>By signing in you agree to our</Text>
          <Text isLink onPress={showPrivacyPolicy}>
            Term and privacy policy
          </Text>
        </Container>
        <FormBuilder
          ref={formRef}
          // onSubmit={login}
          schema={loginSchema}
          formElements={loginFormElements}
        />
        {error ? <Text isError>{error}</Text> : null}
        <Text isLink onPress={forgetPassword}>
          Forgot Password
        </Text>
        <Spacer />
        <Container horizontal fullWidth>
          <Button onPress={login} text={LoginText} fullFlex />
          <Spacer width={10} />
          <Button onPress={register} text={RegisterText} fullFlex />
        </Container>
    </Container>
  );
};
