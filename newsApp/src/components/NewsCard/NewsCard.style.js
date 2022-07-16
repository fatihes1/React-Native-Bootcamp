import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container : {
        backgroundColor: 'white',
        margin : 10,
        borderRadius: 10,
    },
    inner_container : {
        padding : 8,
        marginHorizontal : 5 
    },
    image : {
        height : Dimensions.get('window').height / 3,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },
    title : {
        fontWeight : 'bold',
        fontSize : 18,
        color : 'black'
    },
    description : {
        color : 'black',
        marginTop : 3
    },
    button : {
        margin: 10,
        backgroundColor :'gray',
        padding : 5,
        borderRadius : 20,
        
    },
    button_text : {
        color : 'white',
        paddingLeft : 10
    },
    author : {
        fontStyle : 'italic',
        textAlign : 'right',
        marginTop : 2,
    }
})