import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import { Container, TextInput } from 'lib_components';

type SearchBarProps = {
  leftIconName?: string;
  placeholder?: string;
  editable?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChange?: (text: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  leftIconName = 'search',
  placeholder = 'Search',
  editable,
  autoFocus,
  value,
  onChange,
}) => {
  const {
    colors: {card},
  } = useTheme();
  return (
    <View>
      <Container style={[styles.searchContainer, {backgroundColor: card}]}>
        <TextInput
          value={value}
          iconName={leftIconName}
          placeholder={placeholder}
          editable={editable}
          autoFocus={autoFocus}
          onChangeText={onChange}
        />
      </Container>
    </View>
  );
};

export default SearchBar;
