// En temel haliyle React yapısı kullanılır
// Ekranda görünen her şey en temeline component'tir.

import React from "react";
import {SafeAreaView, View,  Text, Button} from 'react-native';

// View, web'deki <div> | Text ise web'deki <p> taglerine benzer !

const App = () => {
  const sayHello = (label) => {
    console.log("Merhabalar efenim !" + label);
  }
  const changeDisable = () => {

  };
  return (
    <SafeAreaView>
    <View>
      <Text>
        Hello World !
      </Text>
      <Text >
        Hello World !
      </Text>
    </View>
      <Text >
        Hello World !!
      </Text>
      {/* sadece disabled yazarsak da olur. boolen değeri true olacak ise süslü parantez ile true yazmaya gerek yok. */}
      <Button disabled={false} title="Click me!" color={"indigo"} onPress={() => {sayHello("Fatih")}}/>
      
    </SafeAreaView>
  );
}

export default App;