// En temel haliyle React yapısı kullanılır
// Ekranda görünen her şey en temeline component'tir.

import React from "react";
import {SafeAreaView, View,  Text, Button, StyleSheet} from 'react-native';

// View, web'deki <div> | Text ise web'deki <p> taglerine benzer !

const App = () => {
  const sayHello = (label) => {
    console.log("Merhabalar efenim !" + label);
  }
  const changeDisable = () => {

  };
  return (
    <SafeAreaView style={styles.container}>
      {/*  FIRST PART */}
    {/* <View style={styles.upper_view_container}>
      <Text >
        Hello World !
      </Text>
      <Text >
        Hello World !
      </Text>
    </View>
      <View style={styles.middle_container}>
      <Text >
        Hello World !!
      </Text> */}
      {/* sadece disabled yazarsak da olur. boolen değeri true olacak ise süslü parantez ile true yazmaya gerek yok. */}
      {/* <Button disabled={false} title="Click me!" color={"indigo"} onPress={() => {sayHello("Fatih")}}/>
      </View>
      <View style={styles.bottom_view_container}>
      <Text >
        Merhaba Dünya !
      </Text>
    </View> */}
   {/*  ------------------------------------------ */}

     {/*  SECOND PART */}
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
}

 const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  // FIRST PART CSS
  // upper_view_container : {
  //   flex : 2,
  //   backgroundColor : 'red',
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 5,
  // },
  // middle_container : {
  //   flex: 1,
  // },
  // bottom_view_container : {
  //   flex : 2,
  //   backgroundColor : 'blue',
  //   color: 'white',
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 5,
  // },
  // buttonStyle : {
  //   width: 80,
    
  // }

  // -------------------------------------
  // SECOND PART
  box_1 : {
    width: 75,
    height: 75,
    backgroundColor: 'red'
  }, 
  box_2 : {
    width: 75,
    height: 75,
    backgroundColor: 'blue'
  },
  box_3 : {
    width: 75,
    height: 75,
    backgroundColor: 'green'
  },
  box_4 : {
    width: 75,
    height: 75,
    backgroundColor: 'orange'
  },
 })


export default App;