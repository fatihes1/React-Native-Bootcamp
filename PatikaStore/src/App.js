import React from "react";
import {View,FlatList, Text,StyleSheet, SafeAreaView, Dimensions} from "react-native";

import Header from "./components/Header";
import STORE_DATA from "./product-data.json";
import Card from "./components/Card"

const App = () => {
  const renderItems = ({item}) => <Card products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}/>
      <View style={styles.products}>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={STORE_DATA}
        renderItem={renderItems}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex :1 ,
    backgroundColor : 'white',
    padding : 10
  },
  header : {
    flex : 1,
  },
  products : {
    marginTop : 10,
    flex : 5,
  }
})

export default App;