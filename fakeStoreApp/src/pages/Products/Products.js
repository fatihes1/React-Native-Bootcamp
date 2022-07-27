import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from "react-native-config";
import axios from 'axios';

import styles from './Products.style';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Products = () => {
    // CUSTOM HOOK USAGE
    const {error, loading, data} = useFetch(Config.API_URL + "asddsa");

    const renderProduct = ({item}) => {
       return <ProductCard product={item} />
    }

    if(error){
        return <Error />
    }

    if(loading){
        return <Loading />
    }
    
    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}
export default Products;