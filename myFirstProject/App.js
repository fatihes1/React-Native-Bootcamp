// En temel haliyle React yapısı kullanılır
// Ekranda görünen her şey en temeline component'tir.

import React from "react";
import {SafeAreaView, View,  Text, StyleSheet} from 'react-native';

// View, web'deki <div> | Text ise web'deki <p> taglerine benzer !

const App = () => {
  return (
    <SafeAreaView>
    <View style={{backgroundColor: "blue"}}>
      <Text>
        Hello World !
      </Text>
      <Text >
        Hello World !
      </Text>
    </View>
    <Text >
        Hello World !
      </Text>
    </SafeAreaView>
  );
}

export default App;