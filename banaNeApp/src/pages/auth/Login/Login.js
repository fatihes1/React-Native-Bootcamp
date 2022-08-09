import React, {useState} from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initalFormValues = {
    usermail: '',
    password: ''
}

const Login = ({ navigation }) => {
    const handleRegister = () => {
        navigation.navigate('SignPage')
    }

    const [loading, setLoading] = useState(false);
    const handleFormSubmit = async (formValues) => {
        try{
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
            showMessage({
                message: "Başarıyla giriş yapıldı.",
                type: "success",
              });
            setLoading(false);
        }catch(error){
            console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
              });
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initalFormValues}
                onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onType={handleChange('usermail')} values={values.usermail}  placeholder="E-postanızı giriniz" />
                        <Input onType={handleChange('password')} values={values.password} placeholder="Şifenizi Giriniz" isSecure={true}  />
                        <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} loading={loading} />
                    </>
                )
                }
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleRegister} />
        </SafeAreaView>
    )
}

export default Login;