import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import styles from './styles';

export const RouteLine = (props) => {
  const { route } = props;

  if (!route) {
    return null;
  }
  return (
    <MapboxGL.ShapeSource id="routeSource" shape={route}>
      <MapboxGL.LineLayer id="routeFill" style={styles.route} />
    </MapboxGL.ShapeSource>
  );
};

export default RouteLine;
