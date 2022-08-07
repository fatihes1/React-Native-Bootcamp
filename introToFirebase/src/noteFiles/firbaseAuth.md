## Authentication
```
import React from 'react';
import { SafeAreaView, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default () => {

  const signUp = () => {
    auth().createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  const signIn = () => {
    auth().signInWithEmailAndPassword(
      'jane.doe@example.com',
       'SuperSecretPassword!'
    ).then(res => console.log(res))
    .catch(err => console.log(err));
   }

   const signOut = () => {
    auth().signOut()
    .then(res => console.log(res))
    .catch(err => console.log(err));
   }

   const checkUser = () => {
    const user = auth().currentUser;
    console.log(user);
    
   }
  return(
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Hello Firbase</Text>
      <Button title="Sign In" color='green' onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign Out" color='red' onPress={signOut} />
      <Button title="CheckUser" color='yellow' onPress={checkUser} />
    </SafeAreaView>
  )
 }
```