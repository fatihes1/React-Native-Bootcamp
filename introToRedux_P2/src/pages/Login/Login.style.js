import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#64b5f6'
    },
    logo : {
        height : Dimensions.get('window').height / 2,
        height : Dimensions.get('window').width/2,
        resizeMode : 'contain',
        alignSelf : 'center',
        // tintColor : 'white'
    },
    logo_container : {
        flex : 1,
        justifyContent : 'center'
    },
    body_container : {
        flex : 1,
    }
})