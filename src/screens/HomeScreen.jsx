import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { fetchSupportedCurrencies } from '../api';
import { Dropdown } from 'react-native-element-dropdown';

const HomeScreen = () => {
    const [currency, setCurrency] = useState([]);
    const [inputValue, setInputValue] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [result, setResult] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchSupportedCurrencies();
            setCurrency(response);
        };

        fetchData();
    }, []);

    console.log(currency);

    return (
        <View style={styles.container}>

        </View>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})