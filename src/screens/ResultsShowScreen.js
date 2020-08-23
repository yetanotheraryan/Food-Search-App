import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // console.log(result);

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(()=>{
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    // console.log(id);
    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data = {result.photos}
            // photo parameter is iterating over urls of images which are unique
            keyExtractor={(photo)=> photo}
            // item here is gonna be the url
            renderItem = {({item})=>{
                return <Image style = {styles.image} source={{uri: item}}/>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;