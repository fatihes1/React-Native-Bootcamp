import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const DATA = [
    {
      id : 1,
      title : 'Learn RN',
      isComplated : true
    },
    {
      id : 2,
      title : 'Learn AWS',
      isComplated : false
    }
  ]
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
      <View style={styles.list}>
        <FlatList 
          data={DATA}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#16252B',
    flex : 1,
    height : "100%",
    alignItems : 'baseline'
  },
  header : {
    flexDirection : 'row',
    alignContent : 'space-between',
    margin : 10
  },
  header_text : {
    color : '#FFA533',
    fontSize : 34,
    fontWeight : 'bold',
  },
  list :  {
    
  }
})

export default App;