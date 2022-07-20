import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "#DAF7A6",
    },
    listItem: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#ff5733",
    },
    todoText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
    },
    todoInputArea: {
        backgroundColor: "#ff5733",
        flex: 1,
        padding: 10,
        margin: 10,
        position: "absolute",
        borderRadius: 10,
        zIndex: 1,
        top: 500,
        right: 0,
        left: 0,
    },
    todoInput: {
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        paddingHorizontal: 20,
        color: "#000",
        marginBottom: 10,    
    },
    completed: {
        textDecorationLine: "line-through",
    },

});