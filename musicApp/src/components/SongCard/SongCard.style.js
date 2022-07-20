import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        padding : 10,
        flexDirection: 'row',
    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 50,

    },
    inner_container : {
        // backgroundColor : 'red',
        padding : 10,
        flex : 1,
        justifyContent : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 24,
        color : 'black'
    },
    info_container : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    artist : {
        color : 'black'
    },
    year : {
        fontSize : 12,
        marginLeft : 10,
        color : 'gray',
        fontWeight : 'bold',
    },
    soldout_container : {
        borderWidth : 1,
        borderColor : 'red',
        padding : 3,
        borderRadius : 5,
    },
    soldout_title : {
        color : 'red',
        fontSize : 12,
    },
    content_container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    }
})