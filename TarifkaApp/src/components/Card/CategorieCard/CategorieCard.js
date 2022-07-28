import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.style';

const CategorieCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={styles.text}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategorieCard;