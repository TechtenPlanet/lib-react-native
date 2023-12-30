import React, { useState, useEffect, useRef } from "react";
import { lineString as makeLineString } from "@turf/helpers";
import bbox from "@turf/bbox";
import distance from "@turf/distance";
import { View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { KMToMeters } from "lib_helpers/units";
import useGetLocation from "lib_hooks/useGetLocation";
// akuila components
import OrderAnnotation from "./OrderAnnotation";

export default ({
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
}) => {
  const _camera = useRef(null);
  const [akMapAccessToken, setAKMapAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [routeLines, setRouteLines] = useState(null);
  const [userLocationPermission, setUserLocationPermission] = useState(false);
  const [annotations, setAnnotations] = useState([]);
  const [annotationCoordinates, setAnnotationCoordinates] = useState([]);
  const [centerCoordinate, setCenterCoordinate] = useState(false);
  const [followUser, setFollowUser] = useState(!activeOrder);
  const [lastUpdatedLocation, setLastUpdatedLocation] = useState(undefined);
  const { requestPermission } = useGetLocation();

  useEffect(() => {
    getAKMapAccessToken();
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      return;
    }
    let newAnnotations = [];
    let newAnnotationCoordinates = [];
    let newRoute = null;
    if (activeOrder) {
      const deliveryRoute = activeOrder.deliveryRoute;
      const orderOrigin = [
        activeOrder.origin.coordinates.longitude,
        activeOrder.origin.coordinates.latitude,
      ];
      const orderDestination = [
        activeOrder.destination.coordinates.longitude,
        activeOrder.destination.coordinates.latitude,
      ];
      const orderCoordinates = [
        activeOrder.coordinates.longitude,
        activeOrder.coordinates.latitude,
      ];
      newAnnotations = [
        <View key={`${activeOrder.id}_origin`}>
          <OrderAnnotation
            id={`${activeOrder.id}_origin`}
            title={`${activeOrder.id}_origin`}
            coordinates={orderOrigin}
            item={activeOrder}
            onMarkerSelected={onActiveOrderOriginMarkerSelected}
            icon={"store"}
          />
        </View>,
        <View key={`${activeOrder.id}_destination`}>
          <OrderAnnotation
            id={`${activeOrder.id}_destination`}
            title={`${activeOrder.id}_destination`}
            coordinates={orderDestination}
            item={activeOrder}
            onMarkerSelected={onActiveOrderDestinationMarkerSelected}
            icon={"home"}
          />
        </View>,
      ];
      if (!enableUserLocation) {
        newAnnotations.push(
          <View key={`${activeOrder.id}_coordinate`}>
            <OrderAnnotation
              id={`${activeOrder.id}_coordinate`}
              title={`${activeOrder.id}_coordinate`}
              coordinates={orderCoordinates}
              item={activeOrder}
              onMarkerSelected={onActiveOrderLocationMarkerSelected}
              icon={"pedal-bike"}
            />
          </View>
        );
      }
      newAnnotationCoordinates = [
        orderOrigin,
        orderDestination,
        orderCoordinates,
      ];
      if (deliveryRoute) {
        newAnnotationCoordinates = [newAnnotationCoordinates, ...deliveryRoute];
        newRoute = makeLineString(deliveryRoute);
      }
    } else if (availableOrders) {
      newAnnotations = [
        newAnnotations,
        ...availableOrders.map((order) => {
          const coordinate = [
            order.origin.coordinates.longitude,
            order.origin.coordinates.latitude,
          ];
          newAnnotationCoordinates.push(coordinate);
          return (
            <View key={order.id}>
              <OrderAnnotation
                id={order.id}
                title={order.id}
                coordinates={coordinate}
                item={order}
                onMarkerSelected={onAvailableOrderMarkerSelected}
              />
            </View>
          );
        }),
      ];
    } else if (partners) {
      newAnnotations = [
        newAnnotations,
        ...partners.map((partner) => {
          const coordinate = [
            partner.coordinates.longitude,
            partner.coordinates.latitude,
          ];
          newAnnotationCoordinates.push(coordinate);
          return (
            <OrderAnnotation
              id={partner.id}
              title={partner.id}
              coordinates={coordinate}
              item={partner}
              onMarkerSelected={onPartnerMarkerSelected}
            />
          );
        }),
      ];
    }
    setAnnotations(newAnnotations);
    setAnnotationCoordinates(newAnnotationCoordinates);
    if (newRoute) {
      setRouteLines(newRoute);
    } else if (!activeOrder) {
      setRouteLines(null);
    }
  }, [mapLoaded, activeOrder, availableOrders, partners]);

  useEffect(() => {
    if (!mapLoaded) {
      return;
    }
    if (annotationCoordinates?.length > 0) {
      const coordinateString = makeLineString([
        ...annotationCoordinates,
        ...annotationCoordinates,
      ]);

      const bounds = bbox(coordinateString.geometry);
      if (_camera.current) {
        _camera.current.fitBounds(
          [bounds[0], bounds[1]],
          [bounds[2], bounds[3]],
          16,
          1500
        );
        if (!routeLines) {
          setCenterCoordinate(false);
          _camera.current.zoomTo(16);
        }
      }
    } else {
      if (enableUserLocation) {
        setCenterCoordinate(true);
      }

      // setRouteLines(null);
    }
  }, [mapLoaded, annotationCoordinates]);

  useEffect(() => {
    const getPermission = async () => {
      if (!userLocationPermission) {
        await requestPermission();
        setUserLocationPermission(true);
      }
    };
    if (enableUserLocation) {
      getPermission();
    }
  }, []);
  // Action to center the map on user position

  const getAKMapAccessToken = async () => {
    let accessToken = await AsyncStorage.getItem("akMapAccessToken");
    if (!accessToken) {
      try {
        accessToken = await Parse.Cloud.run("getAKMapAccessToken");
        await AsyncStorage.setItem("akMapAccessToken", accessToken);
      } catch (err) {
        logger.parseError(err);
      }
    }
    MapboxGL.setAccessToken(accessToken);
    setAKMapAccessToken(accessToken);
  };

  const onDidFinishRenderingMapFully = () => {
    setLoading(false);
    setMapLoaded(true);
  };
  const centeringButtonPress = async () => {
    try {
      if (_camera.current) {
        _camera.current.flyTo(userLocation, 1500);
        setFollowUser(true);
        setCenterCoordinate(true);
        // _camera.current.zoomTo(14);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Update userposition on update location
  const onUserLocationUpdate = (newUserLocation) => {
    setUserLocation([
      newUserLocation.coords.longitude,
      newUserLocation.coords.latitude,
    ]);
  };

  const onMapMoved = (value) => {
    if (value.properties.isUserInteraction) {
      setFollowUser(false);
      setCenterCoordinate(false);
    } else if (centerCoordinate) {
      setFollowUser(true);
    }
  };

  const shouldUpdateLocation = (location) => {
    if (!lastUpdatedLocation) {
      setLastUpdatedLocation(location);
      return true;
    }
    var options = { units: "miles" };
    let result = distance(
      [lastUpdatedLocation.longitude, lastUpdatedLocation.latitude],
      [location.longitude, location.latitude]
    );
    result = KMToMeters(result);
    if (result > minUpdateDisplacement) {
      setLastUpdatedLocation(location);
      return true;
    }
    return false;
  };

  return {
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
  };
};
