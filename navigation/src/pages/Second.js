import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native';


const Second = (props) => {
    // console.log(props);
    const navigateToPage = () => {
        props.navigation.goBack();
    }

    const author = props.route.params.author;
    // const {author} = props.route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello from Second
            </Text>
            <Text style={styles.mainText}>
                {props.route.params.information} created by {author}
            </Text>
            <Button title='Go Home' color={'green'} onPress={navigateToPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        fontSize : 40,
        fontWeight : 'bold',
        color : 'black'
    },
    mainText : {
        fontSize : 20,
        fontWeight : '300',

    }
})

export default Second;


