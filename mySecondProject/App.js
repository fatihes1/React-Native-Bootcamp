import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming ...</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#e0e0e0'
  },
  card_container : {
    backgroundColor : 'white',
    margin : 15,
    borderRadius : 10,
    borderWidth : 1,
    borderColor : 'gray',
  },
  card_body : {
    padding: 10,
  },
  card_title : {
    fontSize : 30,
    fontWeight : 'bold',
    color : 'black',
    margin : 10,
    marginBottom : 3,
  },
  card_text : {
    fontSize : 18,
    color : 'black',
    margin: 10,
    marginTop : 3,
  },
  card_button_container : {
    backgroundColor : '#00c2ff',
    padding : 15,
    alignItems : 'center',
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 10,
  },
  card_button_title : {
    fontWeight : 'bold',
    color : 'white',
    fontSize : 18
  }
})

export default App;