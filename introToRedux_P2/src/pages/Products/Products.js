import React from "react";
import { SafeAreaView, Text, Image, View, FlatList, Button}from "react-native";
import Config from "react-native-config";
import {useDispatch} from "react-redux";


import styles from './Products.style';
import useFetch from '../../hooks/useFetch';

import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';




const Products = ({navigation}) => {
    const dispatch = useDispatch();

    // CUSTOM HOOK USAGE
    const {error, loading, data} = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate("DetailPage", {id});
    }

    const renderProduct = ({item}) => {
       return <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    }
    // console.log(error);r
    if(error){
        return <Error />
    }

    if(loading){
        return <Loading />
    }
    
    return(
        <SafeAreaView>
            <Button title="Logout" onPress={() => dispatch({type : 'SET_USER', payload : {user: null}})} />
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}
export default Products;