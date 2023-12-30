import { theme } from 'lib_styles';
const styles = {
  annotation: {
    backgroundColor: "purple",
  },
  image: {
    width: 25,
    height: 25,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(68, 154, 235, .4)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#1D1D1D",
    justifyContent: "center",
    alignItems: "center",
  },
  dotCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  currentLocationMarkerContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
  },
};

export default styles;
