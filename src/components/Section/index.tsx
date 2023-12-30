import { Button, Text } from 'lib_components';
import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  onButtonActionPressed?: () => void;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  actionButtonText,
  onButtonActionPressed,
}) => {
  const _onButtonActionPressed = () => {
    if (onButtonActionPressed) {
      onButtonActionPressed();
    }
  };
  return (
    <View>
      <View style={styles.sectionTitleContainer}>
        {title && <Text heading2 isBold>{title}</Text>}
        {actionButtonText && (
          <Button onPress={_onButtonActionPressed} isTransparent>
            <Text heading4 isPrimary>
              {actionButtonText}
            </Text>
          </Button>
        )}
      </View>
      {children}
    </View>
  );
};

export default Section;
