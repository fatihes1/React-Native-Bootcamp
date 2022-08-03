import React from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import { Formik } from 'formik'
import Config from 'react-native-config';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './Login.style';
import usePost from '../../hooks/usePost';

const Login = () => {
    const {data, loading, error, post} = usePost();

    const handleLogin = (values) => {
        // Formik componentin gereksiz yere render olmasından kurtarır.
        // state kullansaydık kullanıcının her harf basışında render edilecekti.
        // state güncellemesi render'i tetikler
        // formikle birlikte validation için 'yup' paketi ile kullanılır.
        // console.log(values);
        post(Config.API_URL, values);
    }

    if(error) {
        Alert.alert('Dükkan', 'Kullanıcı bulunamadı');
    }
    console.log(data);
    // m38rmF$
    // "username": "kevinryan",
// "password": "kev02937@"

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/loging-logo.png')} />
            </View>
            <Formik
                initialValues={{username : '', password : ''}}
                onSubmit={handleLogin}
            >
                {({handleChange, handleSubmit, values }) => (<View style={styles.body_container}>
                    <Input 
                        placeholder="Kullanıcı adını giriniz" 
                        value={values.username} 
                        onType={handleChange('username')}
                        iconName="account"
                        isSecure={false}
                    />
                    <Input 
                        placeholder="Parolanızı giriniz" 
                        value={values.password} 
                        onType={handleChange('password')}
                        iconName="key"
                        isSecure={true}
                    />
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
                </View>)}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;