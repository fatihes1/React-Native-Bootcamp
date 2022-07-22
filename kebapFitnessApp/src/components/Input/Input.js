import React from "react";
import { TextInput, Text, View } from "react-native";

import styles  from './Input.style';

const Input = ({label, placeholder, onChangeText}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput onChangeText={onChangeText} placeholder={placeholder} />
            </View>
        </View>
    )
}

export default Input;