import MapboxGL from '@react-native-mapbox-gl/maps';
import { theme } from 'lib_styles';
const styles = {
  route: {
    lineColor: theme.colors.maps.routeLine,
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 6,
    lineOpacity: 1,
  },
};

export default styles;
