import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'



const MemberResult = ({route}) => {
    const {user} = route.params 
    return(
        <SafeAreaView>
            <View style={styles.message_container}>
                <Text style={styles.message}>Kayıt Tamamlandı</Text>
            </View>
            <Text style={styles.information}>Üye Adı : {user.userName} </Text>
            <Text style={styles.information}>Üye Soyadı : {user.userSurname}</Text>
            <Text style={styles.information}>Üye Yaşı : {user.userAge}</Text>
            <Text style={styles.information}>Üye E-mail Adresi : {user.userMail}</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    information : {
        fontSize : 20,
        color : 'black',
        marginLeft : 10,
    },
    message_container : {
        borderWidth : 1,
        borderColor : 'grey',
        margin : 10,
        padding : 8,
        borderRadius: 5,
        backgroundColor : 'green'
    },
    message : {
        fontSize : 20,
        color : 'white',
        textAlign : "center"
    }
})
export default MemberResult;