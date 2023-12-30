import { Button, Container, TextInput, Spacer, Text } from 'lib_components';
import React, { useEffect, useState } from 'react';
import { ParseInitializeRN, SubClasses, IParseServerAPICred } from 'lib_cloud/parse';
import { GetParseCredentials, SaveParseCredentials } from './actions';
import Parse from 'parse/react-native.js';

export const ConnectToParse: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [parseConfig, setParseConfig] = useState<IParseServerAPICred>({});
  const [status, setStatus] = useState('Connecting...');
  useEffect(() => {
    const getParseConfig = async () => {
      const result = await GetParseCredentials();
      setParseConfig(result);
      setInputValue(result.serverURL);
    };
    getParseConfig();
  }, []);

  useEffect(() => {
    Parse.getServerHealth()
      .then((serverHealth) => {
        setStatus(`Connected: ${serverHealth?.status}`)
        SaveParseCredentials(parseConfig);
      })
      .catch((error) => {
        setStatus(`Not Connected\n${error}`)
      });
  }, [parseConfig]);

  const handleConnect = async () => {
    setStatus(`Connecting...`)
    new ParseInitializeRN({ ...parseConfig, serverURL: inputValue }, SubClasses);
    setParseConfig({ ...parseConfig, serverURL: inputValue });
  };
  return (
    <Container fullFlex margin={20}>
      <TextInput value={inputValue} onChangeText={setInputValue} />
      <Spacer />
      <Button text="Connect" onPress={handleConnect} />
      <Spacer height={50} />
      <Text isCenter heading1>
        {status}
      </Text>
    </Container>
  );
};

export * from './actions';
