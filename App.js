import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { MapView } from "expo";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import stolenreport from "./components/stolenbikes.json";
import ulock from "./components/ulock.png";
import reactMarker from './components/reactlogo.png'

export default function App() {
  const [geoLocation, setGeoLocation] = useState({
    ready: false,
    error: null
  });

  useEffect(() => {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    setGeoLocation({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  }, []);

  geoSuccess = position => {
    console.log(position.coords.latitude);

    setGeoLocation({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude }
    });
  };
  geoFailure = err => {
    setGeoLocation({ error: err.message });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 40.705354,
          longitude: -73.924418,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0221
        }}
      >
        {stolenreport.map(location => {
          return (
            <MapView.Marker
              key={location.id}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title={"title"}
              description={"description"}
              // image={ulock}
            >
              <Image source={ulock} style={styles.img} />
            </MapView.Marker>
          );
        })}
        {/* {geoLocation.ready && (
          <MapView.Marker
            coordinate={{
              latitude: geoLocation.where.lat,
              longitude: geoLocation.where.lng
            }}
            title={"title"}
            description={"description"}
          >
            <Image source={reactMarker} style={styles.img} />
          </MapView.Marker>
        )} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  img: {
    width: 32,
    height: 40
  }
});
