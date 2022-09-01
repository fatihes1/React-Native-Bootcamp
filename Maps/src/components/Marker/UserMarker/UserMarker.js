import React from 'react';
import {Image, View} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './UserMarker.style';
const UserMarker = ({coordinates, userImageURL, onClick}) => {
  return (
    <Marker coordinate={coordinates} onPress={onClick}>
      <View>
        <Image source={{uri: userImageURL}} style={styles.image} />
      </View>
    </Marker>
  );
};

export default UserMarker;
