import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary'
import Secondary from './pages/Secondary'

import UserProvider from './contex/Provider';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='PrimaryScreen' component={Primary} options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16 }
          }} />
          <Tab.Screen name='SecondaryScreen' component={Secondary} options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 16 }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default Router

