import React, {useState, useEffect} from "react";
import {View, SafeAreaView, Text, Button, StyleSheet, FlatList, Switch} from "react-native";


const App = () => {
  const [helloFlag, sethelloFlag] = useState(true);


  useEffect(() => {
    console.log("Mounting");
  }, [])
  
  const updateFlag = () => {
    console.log("First log - number's value : " + helloFlag);
    sethelloFlag(!helloFlag);
    console.log("First log - number's value : " + helloFlag);
  }

  return (
    <SafeAreaView>
      <Text> Hello Lifecycle Topic</Text>
      <Text>Number ---- {helloFlag}</Text>
      <Button title="Up !" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  )
}



export default App;

// Bu durumda hello dışarıdan içeri 'import' anahtar kelimesi ile alınmış
// Bir component gibi düşünelim

const Hello = () => {
  useEffect(() => {
    console.log("Mounted !");

    return () => {
      console.log("Removed !");
    }
  }, []);
  return (
    <Text style={{backgroundColor : 'aqua', padding: 10, marginTop: 5}}>I'm hello componenet</Text>
  )
}