import React from 'react';
import { View, Text, Image } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Details.style";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Details = ({route})=>{

    const {id} = route.params;
    //oluşturduğum state'leri burada da kullanacağım
    const {loading,data,error} = useFetch(`${"https://fakestoreapi.com/products"}/${id}`);

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}} style={styles.image}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} $</Text>
            </View>
        </View>
    )
}

export default Details;