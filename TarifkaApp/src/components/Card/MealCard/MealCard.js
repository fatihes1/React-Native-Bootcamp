import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/Card/MealCard';
const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, error, loading} = useFetch(`${Config.API_MEALS}${strCategory}`);

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data.meals} renderItem={renderMeals} />;
};

export default Meals;