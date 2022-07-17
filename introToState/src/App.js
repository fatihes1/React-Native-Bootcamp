import React, {useState, useEffect} from "react";
import {View, SafeAreaView, Text, Button, StyleSheet, FlatList, Switch} from "react-native";


const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // console.log('render'); her bir up butonunda(state güncellemesinde) 
  // bu component tekrar render edilir.
  useEffect(() => {
    console.log("Number Updated : " + number);
  }, [number]);

  useEffect(() => {
    console.log("Counter Updated : " + counter);
  }, [counter])

  return (
    <SafeAreaView>
      <Text> Hello Lifecycle Topic</Text>
      <Text>Number ---- {number}</Text>
      <Text>Counter ---- {counter}</Text>
      <Button title="Up !" onPress={() => setNumber(number+1)} />
      <Button title="Up 100 times !" onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  )
}



export default App;