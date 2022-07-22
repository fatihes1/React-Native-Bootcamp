import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Alert} from 'react-native';

import Button from '../components/Button/Button';
import Input from '../components/Input'

const MemberSign = ({navigation}) => {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);

    const handleSubmit = () => {

        if (
            !userName ||
            !userSurname ||
            !userAge ||
            !userMail
        ) {
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz')
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail
        };

        navigation.navigate('MemberResultScreen', {user})

    }

    return (
        <SafeAreaView style={styles.container}>
            <Input label="Adınız" placeholder='Örn: Fatih' onChangeText={setUserName} />
            <Input label="Soyadınız" placeholder='Örn: ES' onChangeText={setUserSurname} />
            <Input label="Yaşınızı Giriniz" placeholder='Örn: 25' onChangeText={setUserAge} />
            <Input label="E-mail Adresiniz:" placeholder='example@example.com' onChangeText={setUserMail} />
            <Button text='Kaydı Tamamla' onPress={handleSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})




export default MemberSign;