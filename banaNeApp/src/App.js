import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages/Messages';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

export default () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MessagesScreen"
          component={Messages}
          options={{
            title: 'Dertler',
            headerTintColor: colors.themeblue,
          }}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        {/* <Stack.Screen name="SignPage" component={Sign} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
