import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

import styles from './Button.style';


const Button = ({text, onPress, loading}) => {
    // TouchableOpacity için 'disabled={loading}' eklenerek loading true olduğu anda bir daha tekrar
    // basılmayacak şekilde ayarlanmış olacaktır.
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
            {
                loading ? 
                (<ActivityIndicator color='white' />)
                :
                (
                    <Text style={styles.title}>
                        {text}
                    </Text>
                )
            }
        </TouchableOpacity>
    )
}



export default Button;