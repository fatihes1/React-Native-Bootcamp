import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from 'formik';

import styles from './Sign.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initalFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}


const Sign = ({ navigation }) => {
    const handleLogin = () => {
        navigation.goBack();
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
                        <Input onType={handleChange('usermail')} values={values.usermail} placeholder="E-postanızı giriniz" />
                        <Input onType={handleChange('password')} values={values.password} placeholder="Şifenizi Giriniz" />
                        <Input onType={handleChange('repassword')} values={values.repassword} placeholder="Şifenizi Tekrar Giriniz" />
                        <Button text="Kayıt Ol" theme="primary" onPress={handleSubmit} />
                    </>
                )
                }
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;