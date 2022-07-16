import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./Card.style";
const Card = ({products}) => {
    // console.log(products);
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{uri : products.imgURL}} />
                <Text style={styles.product_title}>{products.title}</Text>
                <Text>{products.price}</Text>
            </View>
            
        </View>
    );
}

// "id": 0,
//         "title": "Xiaomi Mi True Wireless Earbuds",
//         "imgURL": "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
//         "price": "₺134,77",
//         "inStock": true

export default Card;