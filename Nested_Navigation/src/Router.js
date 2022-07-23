import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Member from './pages/member/Member';
import MemberDetail from './pages/member/MemberDetail';
import MemberUpdate from './pages/member/MemberUpdate';

import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const MemberStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='MemberScreen' component={Member} />
      <Stack.Screen name='MemberDetailScreen' component={MemberDetail} />
      <Stack.Screen name='MemberUpdateScreen' component={MemberUpdate} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ProfileScreen' component={Profile} />
      <Stack.Screen name='ProfileEditScreen' component={ProfileEdit} />
    </Stack.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Member'>
        <Tab.Screen name='Profile' component={ProfileStack} />
        <Tab.Screen name='Member' component={MemberStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;