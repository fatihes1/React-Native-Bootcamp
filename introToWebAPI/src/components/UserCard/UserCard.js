import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserCard = props => {
    return (
        <View style={styles.container}>
            <Text>
                {props.username} ---&gt;  {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#eceff1',
        marginVertical : 10,
        padding : 10,
        borderRadius : 8,
    }
})

export default UserCard;