import React from "react";
import { View, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
// import FastImage from "react-native-fast-image";
// import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export const OrderAnnotation = ({
  coordinates,
  id,
  title,
  onMarkerSelected,
  item,
  icon = "location-pin",
}) => {
  return (
    <MapboxGL.PointAnnotation
      style={styles.annotation}
      id={id}
      title={title}
      coordinate={coordinates}
      onSelected={(value) => {
        onMarkerSelected?.(value, item);
      }}
    >
      <View style={styles.currentLocationMarkerContainer}>
        <Image
          source={require("lib_assets/images/order/my-order-icon.webp")}
          style={styles.image}
        />
      </View>
      {/* <Icon name={icon} size={30} color={"#5c40b1"} /> */}
      {/* <FastImage
        style={styles.image}
        source={require('lib_assets/images/order/pickup.webp')}
      /> */}
      {/* <View style={styles.circle}>
        <View style={styles.innerCircle}>
          <View style={styles.dotCircle} />
        </View>
      </View> */}
    </MapboxGL.PointAnnotation>
  );
};

export default OrderAnnotation;
