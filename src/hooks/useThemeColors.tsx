import {useTheme} from '@react-navigation/native';

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  danger: string;
};

const useThemeColors = () => {
  const {colors} = useTheme();
  const themeColors: ThemeColors = {
    secondary: colors.text,
    ...colors,
    danger: '#F64747',
  };
  return themeColors;
};

export default useThemeColors;
