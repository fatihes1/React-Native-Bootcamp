import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import TodoBody from './components/Todobody/TodoBody';

const App = () => {
 

  return (
    <SafeAreaView style={styles.container}>
     <TodoBody/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#DAF7A6",
  height:"100%",
position:"relative"}
});

export default App;