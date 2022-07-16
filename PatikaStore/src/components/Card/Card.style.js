import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#e3e1e1",
        margin: 10,
        borderRadius : 10,
    },
    inner_container : {
        margin : 12,
    },
    image : {
        height : Dimensions.get('window').height / 4,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    product_title : {
        fontSize : 15,
        fontWeight : 'bold',
        color : 'black',
        marginTop : 5
    },
    product_price : {
        fontWeight : 'bold',
        fontSize : 12,
    }
})