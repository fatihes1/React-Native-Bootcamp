import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DetailCard.style';

const DetailCard = ({detail, onSelect}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.meal_name}>{detail.strMeal}</Text>
        <Text style={styles.meal_from}>{detail.strArea}</Text>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.description}>{detail.strInstructions}</Text>
      <TouchableOpacity onPress={onSelect} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;