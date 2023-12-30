import React, { memo } from "react";
import { View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Parse } from "parse/react-native";

import {Loading} from "../";

import CenteringButtonMap from "./CenteringButtonMap";
import RouteLine from "./RouteLine";

import logger from "lib_helpers/logger";

import actions from "./actions";
import styles from "./styles";

export const Map = (props) => {
  const {
    style,
    activeOrder,
    availableOrders,
    partners,
    minDisplacement = 0, //native to MapBox, interval at which to update the user location in meteres
    minUpdateDisplacement = 0, //native to Akuila, interval at which to update the callback for user location, setMyLocation. This does not affect MapBox location
    followUserLocation = false,
    enableUserLocation = true,
    setMyLocation,
    onPress,
    onLongPress,
    onActiveOrderOriginMarkerSelected,
    onActiveOrderDestinationMarkerSelected,
    onActiveOrderLocationMarkerSelected,
    onAvailableOrderMarkerSelected,
    onPartnerMarkerSelected,
  } = props;

  const {
    akMapAccessToken,
    _camera,
    annotations,
    userLocationPermission,
    routeLines,
    userLocation,
    followUser,
    loading,
    mapLoaded,

    shouldUpdateLocation,
    onDidFinishRenderingMapFully,
    onMapMoved,
    centeringButtonPress,
    onUserLocationUpdate,
  } = actions({
    activeOrder,
    availableOrders,
    partners,
    enableUserLocation,
    minUpdateDisplacement,
    onActiveOrderOriginMarkerSelected,
    onActiveOrderDestinationMarkerSelected,
    onActiveOrderLocationMarkerSelected,
    onAvailableOrderMarkerSelected,
    onPartnerMarkerSelected,
  });

  if (!akMapAccessToken) {
    return <View />;
  }

  return (
    <View style={[styles.flex, style]}>
      {loading && <Loading style={styles.loader} full={true} />}
      <MapboxGL.MapView
        onPress={onPress}
        onLongPress={onLongPress}
        logoEnabled={false}
        compassEnabled={false}
        zoomEnabled={true}
        onRegionDidChange={onMapMoved}
        onWillStartLoadingMap={()=>console.log("asdsa")}
        onDidFinishRenderingMapFully={onDidFinishRenderingMapFully}
        onDidFailLoadingMap={() =>
          logger.error("AKMaps: failed to load akuila maps")
        }
        // zoomLevel={12}
        style={styles.map}
      >
        <MapboxGL.Camera
          // zoomLevel={14}
          animationMode="flyTo"
          animationDuration={3000}
          followUserLocation={enableUserLocation ? followUser : false}
          ref={_camera}
        />
        {userLocationPermission && enableUserLocation && (
          <MapboxGL.UserLocation
            visible={true}
            minDisplacement={minDisplacement}
            onUpdate={(newUserLocation) => {
              // if (
              //   userLocation[0] === newUserLocation.coords.longitude &&
              //   userLocation[1] === newUserLocation.coords.latitude
              // ) {
              //   console.log("we hur");
              //   return;
              // }
              // console.log("hur dur");
              // console.log(userLocation);
              // console.log(newUserLocation);

              setMyLocation?.({
                longitude: newUserLocation.coords.longitude,
                latitude: newUserLocation.coords.latitude,
              });
              if (activeOrder) {
                activeOrder.coordinates = new Parse.GeoPoint({
                  longitude: newUserLocation.coords.longitude,
                  latitude: newUserLocation.coords.latitude,
                });
              }
              // if (
              //   shouldUpdateLocation({
              //     longitude: newUserLocation.coords.longitude,
              //     latitude: newUserLocation.coords.latitude,
              //   })
              // ) {
              //   // console.log(
              //   //   "update location: " +
              //   //     JSON.stringify({
              //   //       longitude: newUserLocation.coords.longitude,
              //   //       latitude: newUserLocation.coords.latitude,
              //   //     })
              //   // );
              //   setMyLocation?.({
              //     longitude: newUserLocation.coords.longitude,
              //     latitude: newUserLocation.coords.latitude,
              //   });
              // }
              onUserLocationUpdate(newUserLocation);
            }}
          />
        )}
        {routeLines && <RouteLine route={routeLines} />}
        {annotations}
      </MapboxGL.MapView>
      {enableUserLocation && (
        <CenteringButtonMap onPress={() => centeringButtonPress()} />
      )}
    </View>
  );
};

export default memo(Map);
