import flattenChildren from 'react-keyed-flatten-children';
import { View, ViewStyle } from 'react-native';
import React, { Children, FC } from 'react';

type ComponentSeparatorProps = {
  space?: number;
  direction?: 'vertical' | 'horizontal';
  style?: ViewStyle;
  flex?: number;
  divider?: React.ReactNode;
  children: React.ReactNode;
};

// Creating this ComponentSeparator Components Wrapper to make it easier to space react-native list components
// So, instead of using margin on every child, just use ComponentSeparator
// Due to react native limitations, using ComponentSeparator without a child will render an empty space.

export const ComponentSeparator: FC<ComponentSeparatorProps> = ({
  space = 4,
  direction = 'vertical',
  style,
  flex = direction == 'horizontal' ? 1 : undefined,
  divider,
  children
}) => {
  const kids = flattenChildren(children);
  const flexDirection = direction == 'vertical' ? 'column' : 'row';

  const styleKey = direction == 'vertical' ? 'height' : 'width';

  return (
    <View style={[{ flexDirection }, style]}>
      {Children.map(kids, (child, index) => {
        return (
          <>
            {index > 0 ? divider || <View style={{ [styleKey]: space }} /> : null}
            <View style={{ flex }}>{child}</View>
          </>
        );
      })}
    </View>
  );
};
