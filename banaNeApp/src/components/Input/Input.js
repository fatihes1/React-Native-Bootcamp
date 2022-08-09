import React from "react";
import { TextInput, View } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';


const Input = ({placeholder, onType, value, iconName, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                autoCapitalize="none"
                style={styles.input} 
                placeholder={placeholder} 
                onChangeText={onType} 
                value={value} 
                secureTextEntry={isSecure} />
            {/* <Icon name={iconName} size={28} /> */}
        </View>
    )
}

export default Input;