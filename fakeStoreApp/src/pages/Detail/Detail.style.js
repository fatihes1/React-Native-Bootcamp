import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container : {
        flex :1,
    },
    body_container : {
        padding : 30,
    },
    image : {
        width : deviceSize.width,
        height : deviceSize.height / 3,
        resizeMode : 'contain',
        backgroundColor : 'white'
    },
    title : {
        fontWeight : 'bold',
        color : 'black',
        fontSize : 25,
        textAlign : 'center'
    },
    desc : {
        fontStyle : 'italic',
        color : 'black',
        marginVertical : 10
    },
    price : {
        fontWeight : 'bold',
        fontSize : 18,
        color : 'black',
        textAlign : 'right'
    }
})