import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages/Messages';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = React.useState(null);

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

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
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'Dertler',
              headerTintColor: colors.themeblue,
              headerTitleAlign: 'center',
              headerShown: true,
              headerTitleStyle: {
                fontSize: 15,
              },
              headerRight: () => (
                <Icon
                  name="logout"
                  size={20}
                  color={colors.themeblue}
                  onPress={() => {
                    auth().signOut();
                  }}
                />
              ),
            }}
          />
        )}

        {/* <Stack.Screen name="SignPage" component={Sign} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
