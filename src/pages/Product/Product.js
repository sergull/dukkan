import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Product = ({navigation}) => {

    const {loading,data,error} =useFetch("https://fakestoreapi.com/products");

    const handleProductSelect=(id)=>{
        //gelen ürünün id sine göre ayırt edip detayları getirecek
        navigation.navigate("DetailsPage", {id})
    }

    const renderProduct = ({item})=> <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>

    if(loading){
        return <Loading/>
    }


    if(error){
        return <Error />
    }

    return(
        <View>
            
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}
export default Product;