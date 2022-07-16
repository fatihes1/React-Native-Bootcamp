import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

import Card from "./components/Card";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım. Evet tarafından."/>
      <Card title="Serbest" text="İlhami abi sen söyle, ben başka bir ilde miyim?"/>
      <Card title="Eddard Stark" text="Winter is coming.." />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#e0e0e0'
  }
})

export default App;