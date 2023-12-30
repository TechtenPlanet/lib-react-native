import {StyleSheet} from 'react-native';
import { theme } from 'lib_styles';

export default StyleSheet.create({
  button: {
    ...theme.button,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonChildrenContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    // width: 15,
    marginRight: 5,
  },
  text: {
    ...theme.text,
  }
});
