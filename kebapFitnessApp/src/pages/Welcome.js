import React from "react";
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Button from '../components/Button/Button';


const Welcome = (props) => {
    const goToMemberSignPage = () => {
        props.navigation.navigate('MemberSignScreen')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Kebap Fitness Salonu
            </Text>
                <Button text='Üye Kaydı Oluştur' onPress={goToMemberSignPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        // alignItems : 'center'
    },
    header : {
        textAlign : 'center',
        margin : 10,
        fontSize : 30,
        fontWeight : 'bold',
        color : 'black'
    }
})


export default Welcome;