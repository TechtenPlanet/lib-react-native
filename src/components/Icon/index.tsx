import * as React from "react";
import IconFontAwesome5, {
  FontAwesome5IconProps,
} from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

interface OwnProps {
  isPrimary?: boolean;
  useIonicons?: boolean;
  useMaterialIcons?: boolean;
}

type IconProps = OwnProps & FontAwesome5IconProps;

export const Icon: React.FC<IconProps> = ({
  isPrimary,
  useIonicons,
  useMaterialIcons,
  color,
  ...rest
}) => {
  const {
    colors: { text, primary },
  } = useTheme();
  let iconColor = isPrimary ? primary : text;
  if (color) {
    iconColor = color as any;
  }

  return useIonicons ? (
    <Ionicons {...rest} color={iconColor} />
  ) : useMaterialIcons ? (
    <MaterialIcons {...rest} color={iconColor} />
  ) : (
    <IconFontAwesome5 {...rest} color={iconColor} />
  );
};

export default Icon;
