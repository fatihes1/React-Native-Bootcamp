import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FloatingButton.style';

const FloatingButton = ({iconName, onPressMethod}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressMethod}>
      <Icon name={iconName} size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
