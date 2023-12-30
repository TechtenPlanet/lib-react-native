import * as React from 'react';
import { Image, ViewProps, StyleProp, TextStyle, ImageSourcePropType, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { ParallaxImage, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { Container, Text, Touchable } from 'lib_components';

type OwnProps = {
  coverImage?: ImageSourcePropType;
  title?: string;
  subTitle?: string;
  parallaxProps?: AdditionalParallaxProps;
  isSmallCover?: boolean;
  hasOverlay?: boolean;
  renderOverlayContent?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

type CardProps = OwnProps & ViewProps;
export const Card: React.FC<CardProps> = ({
  coverImage,
  title,
  subTitle,
  children,
  parallaxProps,
  isSmallCover,
  hasOverlay,
  renderOverlayContent,
  onPress,
  titleStyle,
  subTitleStyle,
  style,
  ...rest
}) => {
  const {
    colors: { card },
  } = useTheme();

  const _renderCard = () => {
    return (
      <Container
        onPress={onPress}
        style={[{ backgroundColor: card }, styles.card, style]}
        {...rest}
      >
        {coverImage && (
          <Container
            style={isSmallCover ? styles.coverImageSmallContainer : styles.coverImageContainer}
          >
            {parallaxProps ? (
              <ParallaxImage
                parallaxFactor={0.4}
                source={coverImage}
                style={styles.coverImage}
                containerStyle={styles.parallaxImageContainer}
                {...parallaxProps}
              />
            ) : (
              <>
                <Image source={coverImage} style={styles.coverImage} />
              </>
            )}
            {hasOverlay && <View style={styles.overlay}>{renderOverlayContent}</View>}
          </Container>
        )}
        <Container style={styles.cardBody}>
          {title && (
            <Text style={[styles.cardTitle, titleStyle]}>
              {title}
            </Text>
          )}
          {subTitle && (
            <Text style={[styles.cardSubtitle, subTitleStyle]}>
              {subTitle}
            </Text>
          )}
          {children}
        </Container>
      </Container>
    );
  };
  return _renderCard();
};
