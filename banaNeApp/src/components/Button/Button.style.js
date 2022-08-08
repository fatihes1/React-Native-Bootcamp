import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container : {
        padding : 5,
        marginHorizontal : 10,
        marginVertical : 8,
        backgroundColor : '#2286c3',
        borderRadius: 5,
        alignItems : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 16,
        margin : 3,
        color : 'white'

    }
})



export default {
    primary : StyleSheet.create({
        ...baseStyle,
        container : {
            ...baseStyle.container,
            backgroundColor : '#2286c3', 
        },
        title : {
            ...baseStyle.title,
            color : 'white'
        }
    }),
    secondary : StyleSheet.create({
        ...baseStyle,
        container : {
            ...baseStyle.container,
            backgroundColor : 'white',
            borderColor : '#2286c3',
            borderWidth : 1,
        },
        title : {
            ...baseStyle.title,
            color : '#2286c3'
    
        }
    })
}
