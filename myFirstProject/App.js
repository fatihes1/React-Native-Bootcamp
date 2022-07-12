// En temel haliyle React yapısı kullanılır
// Ekranda görünen her şey en temeline component'tir.

import React from "react";
import {View, Text, StyleSheet} from 'react-native';

// View, web'deki <div> | Text ise web'deki <p> taglerine benzer !

const App = () => {
  return (
    <View>
      <Text >
        Hello World !
      </Text>
    </View>
  );
}

export default App;