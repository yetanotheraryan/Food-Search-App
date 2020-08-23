import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price)=>{
        // price === '$' || price === '$$' || price === '$$$']
        return results.filter(result =>{
            return result.price === price;
        })
    }

    return ( <>
        <SearchBar term={term} 
        onTermSubmit={()=>searchApi(term)}
        onTermChange={newTerm => setTerm(newTerm)} />
        {(errorMessage != null) ? <Text>{errorMessage}</Text> : null}        
        
        <ScrollView>
            <ResultsList 
                results = {filterResultsByPrice('$')} 
                // navigation = {navigation}
                title="Cost Effective" />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                // navigation={navigation}
                title="Bit Pricier" />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                // navigation = {navigation}
                title="Big Spender" />
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

