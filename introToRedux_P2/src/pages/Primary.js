import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

// Burdan reducer tetiklenecek sadece
// Gelen veri store'a gidecek
import { useDispatch } from "react-redux";

const Primary = () => {
    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        // console.log(text);
        // dispatch ile producer'ı tetikleyelim ki
        // Store içerisinde verimiz tutulsun
        // type değeri reducer içerisinde eşleşecek (switch case'lerden biriyle)
        // ve case içinde store için güncellenecek
        dispatch({
            type: 'ADD_NAME', payload: {
                name: text
            }
        })
    }

    const handleSaveUsername = () => {
        dispatch({
            type: 'SET_USERNAME', payload: {
                username
            }
        })
    }

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>
                Pimary
            </Text>
            <View style={{ borderWidth: 1, margin: 10, padding: 5, borderRadius: 8 }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="İsim giriniz"
                />
            </View>
            <View style={{ borderWidth: 1, margin: 10, padding: 5, borderRadius: 8 }}>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Kullanıcı adı giriniz"
                />
            </View>
            <Button title="Ekle" color='green' onPress={handleAdd} />
            <View style={{ marginTop: 10 }}>
                <Button title="Kullanıcı adını kaydet" color='blue' onPress={handleSaveUsername} />
            </View>
        </View>
    )
}

export default Primary;