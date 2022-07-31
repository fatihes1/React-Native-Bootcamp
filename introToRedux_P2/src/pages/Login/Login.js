import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './Login.style';

const Login = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/loging-logo.png')} />
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı adını giriniz"/>
                <Input placeholder="Parolanızı giriniz"/>
                <Button text="Giriş Yap" onPress={() => {console.log('Loging !')}} />
            </View>
        </SafeAreaView>
    )
}

export default Login;