import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native'
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import CategoriesCard from "../../components/Card/CategorieCard";

const Categories = () => {
    // console.log(Config.API_CATEGORIES);
    const { error, loading, data } = useFetch(Config.API_CATEGORIES);

    const renderCategories = ({ item }) => {
        return (
            <CategoriesCard
                category={item}
                onSelect={() => handleCategorySelect(item.strCategory)}
            />
        )
    }
    // console.log(data);
    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsScreen', {strCategory});
    }

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data.categories}
                renderItem={renderCategories}
                keyExtractor={(item) => item.idCategory}
            />
        </SafeAreaView>
    );
}

export default Categories;