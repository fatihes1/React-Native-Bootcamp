import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ListRenderItem} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>
          Yapılacaklar
        </Text>
        <Text style={styles.header_text }>
          0
        </Text>
        
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#16252B',
    flex : 1,
    height : "100%"
  },
  header : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin : 10
  },
  header_text : {
    color : '#FFA533',
    fontSize : 34,
    fontWeight : 'bold',
  }
})

export default App;