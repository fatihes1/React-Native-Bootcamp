import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import Config from "react-native-config";
import axios from 'axios';

import styles from './Products.style';
import ProductCard from '../../components/ProductCard';


const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Artık gelen data = productData
        // yani productData değişkeni ile ulaşabiliriz
        const {data : productData} = await axios.get(Config.API_URL);
        setData(productData);
        // console.log(productData);
    }

    const renderProduct = ({item}) => {
       return <ProductCard product={item} />
    }
    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}
export default Products;