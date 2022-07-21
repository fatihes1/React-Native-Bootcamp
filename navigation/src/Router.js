import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './pages/First';
import Second from './pages/Second';

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title : 'Home Page'}} name='FirstScreen' component={First} />
        <Stack.Screen name='SecondScreen' component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;