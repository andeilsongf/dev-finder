import React, { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons'
import { Callout } from 'react-native-maps';

import api from '../../services/api';

import {
  Container,
  Map,
  UserLocationImage,
  Username,
  Biography,
  Techs,
  FormWrapper,
  FormInput,
  ButtonForm
} from './styles'

export function Main({ navigation }){

  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState("");

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

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    })

    setDevs(response.data.devs);

  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
  <>
   <Container>
     <Map onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion}>
       {devs.map(dev => (
         <Marker
         key={dev._id}
         coordinate={{
            longitude: dev.location.coordinates[0],
            latitude: dev.location.coordinates[1], 
         }}
         >
 
           <UserLocationImage source={{ uri: dev.avatar_url }} />
           <Callout style={{ width: 260 }} onPress={() => {
             navigation.navigate('Profile', { github_username: dev.github_username});
           }}>
             <Username>{dev.name}</Username>
             <Biography>{dev.bio}</Biography>
             <Techs>{dev.techs.join(', ')}</Techs>
           </Callout>
        </Marker>
       ))}
     </Map>
   </Container>

   <FormWrapper>
      <FormInput value={techs} onChangeText={setTechs}/>
      <ButtonForm onPress={loadDevs}>
        <MaterialIcons name="my-location" size={20} color="#fff" />
      </ButtonForm>
   </FormWrapper>
   </>
  );
}
