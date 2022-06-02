import React, { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { StyleSheet } from 'react-native'


import {
  Container,
  UserLocationImage,
  UserPopUp,
  Username,
  Biography,
  Techs,
} from './styles'

export function Main(){

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();

  },[]);

  if (!currentRegion) {
    return null;
  }

  return (
   <Container>
     <MapView initialRegion={currentRegion} style={styles.map}>
       <Marker
        coordinate={{
          latitude: -15.8078581,
          longitude: -48.0693152,
        }}
        >

          <UserLocationImage source={{ uri: 'https://avatars.githubusercontent.com/u/23082238?v=4' }} />
          <UserPopUp>
            <Username>Diego Fernandes</Username>
            <Biography>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</Biography>
            <Techs>ReactJS, React Native, Node.js</Techs>
          </UserPopUp>
        </Marker>
     </MapView>
   </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})