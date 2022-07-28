import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Categories from './pages/Categories'
import Details from './pages/Details'
import Meals from './pages/Meals'


const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title : 'Categories',
            headerTitleAlign : 'center',
            headerTitleStyle :  { color : 'orange'}
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={Details}
          options={{
            title : 'Details',
            headerTitleAlign : 'center',
            headerTitleStyle :  { color : 'orange'}
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title : 'Meals',
            headerTitleAlign : 'center',
            headerTitleStyle :  { color : 'orange'}
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;