import * as React from 'react';
import { Container, Text, Button } from 'lib_components';
import { useActions } from './actions';

export const PrivacyPolicy = () => {
const {handleDismissPreceptPage}  = useActions()
  return (
    <Container fullFlex>
        <Text isCenter >
          Lots of text
        </Text>

      <Container margin={10} isPositionAbsolute style={{ bottom: 0 }}>
        <Button
          isFullWidth
          text="Dismiss"
          onPress={handleDismissPreceptPage}
        />
      </Container>
    </Container>
  );
};

export default PrivacyPolicy;
