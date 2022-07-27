import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Detail.style';

const Detail = ({ route }) => {
    const { id } = route.params;
    // console.log(id);

    const { error, loading, data } = useFetch(`${Config.API_URL}/${id}`);

    if (error) return <Error />

    if (loading) return <Loading />

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.body_container}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.desc}>
                    {data.description}
                </Text>
                <Text style={styles.price}>
                    {data.price} TL
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default Detail;