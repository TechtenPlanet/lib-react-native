import { StyleSheet } from 'react-native';
import { theme } from 'lib_styles';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:'white'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  formContainer: {
    // flex: 1
    // marginTop: 24,
    // marginBottom: 24
  },
  error: {
    color: theme.colors.error,
    marginTop: 5
  }
});
