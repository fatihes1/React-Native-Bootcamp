## TAB NAVIGATOR
```
import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Favorite from "./pages/Favorites"
import Product from "./pages/Products"

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProductsTab" component={Product} />
        <Tab.Screen name="FavoritesTab" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

```

## DRAWER NAVIGATOR