import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';

export default () => {

  const checkDB = () => {
    const reference = database().ref('books/');
    reference.once('value')
      .then(snapshot => {
        const response = snapshot.val();
        console.log('Res: ', response);
      });;
  }

  // EKLEME SİLME TAKİBİ YAPAR
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      });;
   }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 60 }}>Hello Firbase</Text>
      <Button title='Check DB' onPress={checkDB} />
      <Button title='Listen DB' color='green' onPress={listenDB} />
    </SafeAreaView>
  )
}