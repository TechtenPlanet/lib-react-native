import * as React from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native';
import { theme } from 'lib_styles';

interface TextProps extends BaseTextProps {
  children?: React.ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isBold?: boolean;
  isSemiBold?: boolean;
  isHeadingTitle?: boolean;
  heading1?: boolean;
  heading2?: boolean;
  heading3?: boolean;
  heading4?: boolean;
  isCenter?: boolean;
  isWhite?: boolean;
  hasMargin?: boolean;
  isLink?: boolean;
  isError?: boolean;
  price?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  isSecondary,
  isWhite,
  isBold,
  isSemiBold,
  isHeadingTitle,
  isCenter,
  hasMargin,
  heading1,
  heading2,
  heading3,
  heading4,
  isLink,
  isError,
  style,
  price,
  ...rest
}) => {
  let color = theme.colors.primary;
  let fontSize = heading1
    ? theme.textFontSizes.heading1
    : heading2
    ? theme.textFontSizes.heading2
    : heading3
    ? theme.textFontSizes.heading3
    : heading4
    ? theme.textFontSizes.heading4
    : theme.textFontSizes.regular;
  let marginTop = 0;
  let textDecorationLine:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined = 'none';
  let textAlign: 'auto' | 'center' | 'left' | 'right' | 'justify' | undefined;

  if (isSecondary) {
    color = theme.colors.secondary;
    fontSize = 13;
  }

  if (isHeadingTitle) {
    fontSize = theme.textFontSizes.heading2;
  }

  if (isWhite) {
    color = theme.colors.textWhite;
  }

  if (isCenter) {
    textAlign = 'center';
  }

  if (hasMargin) {
    marginTop = 10;
  }

  if (isLink) {
    textDecorationLine = 'underline';
  }

  if (isError) {
    color = theme.colors.error;
  }

  const fontFamily =
    isBold || heading1 || heading2 || heading3 || heading4
      ? theme.defaultFontFamilyBold
      : isSemiBold
      ? theme.defaultFontFamilySemibold
      : theme.defaultFontFamilyRegular;
  return (
    <BaseText
      {...rest}
      style={[
        {
          color,
          fontFamily,
          fontSize,
          textAlign,
          marginTop,
          textDecorationLine,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  );
};

export default Text;
