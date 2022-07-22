import 'react-native-gesture-handler';
import React from "react";


import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';

import Favorite from "./pages/Favorites"
import Product from "./pages/Products"

const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProductsTab" component={Product} />
        <Drawer.Screen name="FavoritesTab" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;