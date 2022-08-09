import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '././FloatingButton.style.js';

const FloatingButton = () => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
    )
};

export default FloatingButton;