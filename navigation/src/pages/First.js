import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native';

const First = (props) => {
    // console.log("FIRST" , props);
    const navigateToPage = () => {
        props.navigation.navigate('SecondScreen', {information : 'Bu bilgi ilk sayfadan', author : 'Fatih'});
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello from First
            </Text>
            <Button 
                title='Go To Seconds'
                onPress={navigateToPage}
            />
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
    }
});



export default First;


