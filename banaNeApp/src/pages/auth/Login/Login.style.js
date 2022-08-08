import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {backgroundColor: '#66a9d4', flex: 1},
    logo : {
        width: Dimensions.get('window').width * 0.9,
        height : Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor : 'white'
    },
    logo_container : {
        flex : 1,
        justifyContent : 'center',
    },
    body_container :  {
        flex : 1,
    }
})