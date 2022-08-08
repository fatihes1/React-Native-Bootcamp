import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Login = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Input placeholder="E-postanızı giriniz" />
            <Input placeholder="Şifenizi Giriniz" />
            <Button text="Giriş Yap" theme="primary"/>
            <Button text="Kayıt Ol" theme="secondary" />
        </SafeAreaView>
    )
}

export default Login;