import React from "react";
import { View, Text, FlatList, SafeAreaView, Button } from "react-native";
import { useSelector } from "react-redux";

// Tüm verileri silme butonu reducer'ı tetikler
import { useDispatch } from "react-redux";

const Secondary = () => {
    // FlatList'e data olarak en dışta tanımlanan global state gelir
    // ee nasıl getireceğiz --> Selector !
    const list = useSelector(s => s.nameList);
    const myUsername = useSelector(u => u.userName);

    const renderNames = ({item}) => {
        return <Text>{item}</Text>
    }

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch({type: 'CLEAN_LIST'})
    }

    return (
        <SafeAreaView>
            <Text style={{fontSize : 30, color : 'black'}}>
                Secondary
            </Text>
            <Text style={{fontSize : 30, color : 'black'}}>
                Kullanıcı : {myUsername}
            </Text>
            <Button title="Tüm Verileri Sil" onPress={handleDelete} />
            <FlatList
                data={list}
                renderItem={renderNames}
                keyExtractor={(_, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default Secondary;