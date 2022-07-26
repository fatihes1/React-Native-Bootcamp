import React, { useState, useEffect } from "react";
import {View, SafeAreaView, Text, FlatList, ActivityIndicator, Button} from "react-native";

import axios from "axios";


import UserCard from "./components/UserCard/UserCard";



const App = () => {
  // let res = 0;
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    const response   = await axios.get('https://jsonplaceholder.typicode.com/users');
    setLoading(false);
    setUserList(response.data);

    // axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //   setLoading(false);
    //   setUserList(response.data);
    // })

  } 

  const renderUser = ({item}) => <UserCard name={item.name} username={item.username}/> 

  useEffect(() => {
    fetchData();
  }, [])

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