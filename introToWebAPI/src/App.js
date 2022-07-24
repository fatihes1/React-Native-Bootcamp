import React from "react";
import {View, SafeAreaView, Text, Button} from "react-native";

import axios from "axios";

const App = () => {
  // let res = 0;
  const fetchData = () => {
    let res = null;
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        res = response;
      })
      .catch(error => console.log(error))
      console.log(res); // null verir
  }  
  return (
    <SafeAreaView>
      <Text>
        Holaa !
      </Text>
      <Button title="Fetch Data" color='green' onPress={fetchData} />
    </SafeAreaView>
  )
}

export default App;