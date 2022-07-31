import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        backgroundColor : '#eeeeee',
        borderColor : '#e0e0e0',
        borderWidth : 1,
        margin : 10,
        flexDirection : 'row',
        borderRadius : 5
    },
    image : {
        width: 100,
        minHeight: 100,
        margin : 5,
        borderRadius : 5,
        resizeMode : 'contain',
        backgroundColor :'white'
    },
    body_container : {
        flex : 1,
        padding: 5,
        justifyContent : 'space-between'
    },
    title : {
        color : 'black',
        fontWeight : 'bold',
        fontSize : 16,
    },
    price : {
        color : 'black',
        textAlign : 'right',
        fontSize: 14,
        fontStyle : 'italic'
    }
})