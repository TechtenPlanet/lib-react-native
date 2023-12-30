import { useNavigation } from '@react-navigation/native';

export const useActions =  () => {
  const navigator = useNavigation();

  const handleDismissPreceptPage = () => {
    navigator.goBack();
  };
  return { handleDismissPreceptPage };
};
