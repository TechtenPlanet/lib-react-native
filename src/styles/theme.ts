//NOTE: Needs work
// import { DefaultTheme } from "react-native-paper";
import normalize, { normalizeStyle, reverseNormalize } from '../helpers/normalize';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';

export const theme = {
  // ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    // primary: "#8a70c4",
    primary: '#5c40b1',
    heading: '#5c40b1',
    text: '#2a2a2f',
    textWhite: '#f8f8f8',
    border: '#3a3a3a',
    borderLight: '#959596',
    opaquePrimary: 'rgba(176, 127, 218, 0.22)',
    secondary: '#414757',
    error: '#f13a59',
    success: '#50B748',
    gradientStart: '#5C3FB1',
    gradientStop: '#7451BD',
    backgroundGradientStart: '#8F67CA',
    backgroundGradientStop: '#3F29A5',
    dividerDefaultColor: '#E6E6E6',
    successGradient: ['#59c951', '#50B748'],
    disbled: '#cccccc',
    maps: {
      routeLine: '#4a80f5',
    },
    get gradient() {
      return [this.gradientStart, this.gradientStop];
    },
    get negativeGradient() {
      return ['#f13a59', '#e52e4d'];
    },
    get gradientDisabled() {
      return ['#959596', '#959596'];
    },
    get backgroundGradient() {
      return ['#8F67CA', '#815CC5', '#6244B4', '#4B34AA', '#3F29A5'];
    },
  },
  get input(): StyleProp<ViewStyle> {
    return {
      borderRadius: 5,
      height: 45,
      borderBottomWidth: 0.5,
      borderBottomColor: this.colors.borderLight
    };
  },
  get button() {
    return {
      borderRadius: 8,
      height: 45,
      backgroundColor: theme.colors.primary,
    };
  },
  get buttonDisbled() {
    return {
      ...this.button,
      backgroundColor: theme.colors.disbled,
    };
  },
  get text() {
    return {
      fontFamily: this.defaultFontFamilyRegular,
    };
  },
  textFontSizes: {
    heading1: 26,
    heading2: 22,
    heading3: 20,
    heading4: 17,
    regular: 14,
  },
  defaultFontFamilySemibold: 'Lato-Semibold',
  defaultFontFamilyBold: 'Lato-Bold',
  defaultFontFamilyRegular: 'Lato-Regular',
  normalize: normalize,
  normalizeStyle: normalizeStyle,
  reverseNormalize: reverseNormalize,
};

// console.log(JSON.stringify(theme.normalizeStyle(styles, true), null, 2));
// export default theme.normalizeStyle(styles);
export default theme;

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5C3FB1',
    secondary: '#9b9b9b',
    text: '#333333',
    border: '#ededed',
    error: '#f13a59',
    success: '#50B748',
  },
};
export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#5C3FB1',
    secondary: '#ccc',
    card: '#282828',
    background: '#121212',
    border: '#333333',
    error: '#D72323',
    success: '#50B748',
  },
};
export const akuilaLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5C3FB1',
    secondary: '#9b9b9b',
    text: '#333333',
    border: '#ededed',
    error: '#f13a59',
    success: '#50B748',
  },
};

export const akuilaDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#7f58f5',
    secondary: '#ccc',
    card: '#31363F',
    background: '#242930',
    border: '#333333',
    error: '#D72323',
    success: '#50B748',
  },
};
