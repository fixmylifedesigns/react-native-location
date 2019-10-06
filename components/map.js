import React from 'react'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import stolenreport from "./stolenbikes.json";


export default function Map() {
    return (
        <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"title"}
          description={"description"}
        />
      </MapView>
    )
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
    }
  });
