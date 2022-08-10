import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress, loading, theme = 'primary'}) => {
  // TouchableOpacity için 'disabled={loading}' eklenerek loading true olduğu anda bir daha tekrar
  // basılmayacak şekilde ayarlanmış olacaktır.
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles[theme].title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
