import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {enableLatestRenderer} from 'react-native-maps';
import Loading from './components/Loading';
import UserMarker from './components/Marker/UserMarker';
import useFetch from './hooks/useFetch';

enableLatestRenderer();

const App = () => {
  const mapRef = useRef();
  const {data, loading, error} = useFetch(
    'https://random-data-api.com/api/v2/users?size=10',
  );
  // console.log(data);
  const renderMarkers = () => {
    return data.map(({id, avatar, address: {coordinates}}) => {
      return (
        <UserMarker
          onClick={() => handleMarkerSelect(coordinates)}
          key={id}
          coordinates={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          }}
          userImageURL={avatar}
        />
      );
    });
  };
  const handleMarkerSelect = coor => {
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 8,
      longitudeDelta: 8,
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
        {data && renderMarkers()}
      </MapView>
      {loading && <Loading />}
    </SafeAreaView>
  );
};
export default App;
