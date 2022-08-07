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

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A4',
      price: 128,
    })
      .then(() => console.log('Data set.'));
  }

  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      price: 150,
    })
      .then(() => console.log('Data updated.'));
  }

  // Array gibi verilen path içerisine değer push eder.
  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'BMW',
      model: 'X5',
      price: 150,
    })
      .then(() => console.log('Data pushed.'));
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 60 }}>Hello Firbase</Text>
      <Button title='Check DB' onPress={checkDB} />
      <Button title='Listen DB' color='green' onPress={listenDB} />
      <Button title='Set DB' color='red' onPress={setDB} />
      <Button title='Update DB' color='blue' onPress={updateDB} />
      <Button title='Push DB' color='cyan' onPress={pushDB} />
    </SafeAreaView>
  )
}