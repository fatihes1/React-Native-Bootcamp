import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from 'formik'

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';


const initalFormValues = {
    usermail: '',
    password: ''
}

const Login = ({ navigation }) => {
    const handleRegister = () => {
        navigation.navigate('SignPage')
    }

    const handleFormSubmit = (formValues) => {
        console.log(formValues);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initalFormValues}
                onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onType={handleChange('usermail')} values={values.usermail}  placeholder="E-postanızı giriniz" />
                        <Input onType={handleChange('password')} values={values.password} placeholder="Şifenizi Giriniz" />
                        <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} />
                    </>
                )
                }
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleRegister} />
        </SafeAreaView>
    )
}

export default Login;