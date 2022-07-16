import React from "react";
import { TextInput, View, Text } from "react-native";

import styles from "./Header.style";

const Header = () => {
    return (
        <View>
            <Text style={styles.header_text}>
                PATIKASTORE
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
                keyboardType="default"
            />
        </View>
    )
}

export default Header;
