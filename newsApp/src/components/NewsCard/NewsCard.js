import React from "react";
import {View, Text, Image, TouchableOpacity, Alert} from "react-native";

import Styles from "./NewsCard.style";

const NewsCard = ({news}) => {
    // console.log(props);
    return(
        <View style={Styles.container}>
            <Image style={Styles.image} source={{uri: news.imageUrl}}/>
            <View style={Styles.inner_container}>
                <Text style={Styles.title}>{news.title}</Text>
                <Text style={Styles.description}>{news.description}</Text>
                <Text style={Styles.author}>{news.author}</Text>
            </View>
            <TouchableOpacity style={Styles.button} onPress={ () => {Alert.alert(`${news.title} adlı haber açıldı !`)} }>
                <Text style={Styles.button_text}>Devamını Oku ...</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NewsCard;