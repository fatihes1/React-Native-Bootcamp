import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {enableLatestRenderer} from 'react-native-maps';
import Loading from './components/Loading';
import useFetch from './hooks/useFetch';

enableLatestRenderer();

const App = () => {
  const {data, loading, error} = useFetch(
    'https://random-data-api.com/api/v2/users?size=30',
  );
  // console.log(data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView style={{flex: 1}} />
      {loading && <Loading />}
    </SafeAreaView>
  );
};
export default App;
