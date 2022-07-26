## Fetch data with asenkron (then & catch)
```
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
```

## Biz veriyi asenkron gibi değil de cevap gelene kadar bekle dersek ne yapacağız?
# async & await

```
import React from "react";
import {View, SafeAreaView, Text, Button} from "react-native";

import axios from "axios";

const App = () => {
  // let res = 0;
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response);
        
    }catch (error) {}
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
```

## Show loading circle until fetching data
```
import React, { useState } from "react";
import {View, SafeAreaView, Text, FlatList, ActivityIndicator, Button} from "react-native";

import axios from "axios";


import UserCard from "./components/UserCard/UserCard";



const App = () => {
  // let res = 0;
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response   = await axios.get('https://jsonplaceholder.typicode.com/users');
    setLoading(false);
    setUserList(response.data);
  } 

  const renderUser = ({item}) => <UserCard name={item.name} username={item.username}/> 

  return (
    <SafeAreaView>
      <View>
        {
          loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList data={userList} renderItem={renderUser} />
          )
        }
      <Button title="Fetch Data" color='green' onPress={fetchData} />
      </View>
    </SafeAreaView>
  )
}

export default App;
```