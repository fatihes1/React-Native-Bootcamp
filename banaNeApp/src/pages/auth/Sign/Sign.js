import React, {useState} from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import styles from './Sign.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initalFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}


const Sign = ({ navigation }) => {
    const handleLogin = () => {
        navigation.goBack();
    }
    const [loading, setLoading] = useState(false);
    const handleFormSubmit = async(formValues) => {
        if(formValues.password !== formValues.repassword){
            showMessage({
                message: "Şifreler uyuşmuyor",
                type: "danger",
              });
              return;
        }
        try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            showMessage({
                message: "Kullanıcı oluşturuldu.",
                type: "success",
              });
              navigation.navigate('LoginPage');
            setLoading(false);
        }catch(error) {
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
                        <Input onType={handleChange('usermail')} values={values.usermail} placeholder="E-postanızı giriniz" />
                        <Input onType={handleChange('password')} values={values.password} placeholder="Şifenizi Giriniz" isSecure={true}/>
                        <Input onType={handleChange('repassword')} values={values.repassword} placeholder="Şifenizi Tekrar Giriniz" isSecure={true} />
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