import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { convert, fetchSupportedCurrencies } from '../api';
import { Dropdown } from 'react-native-element-dropdown';

const Currency = () => {
    const [currency, setCurrency] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [result, setResult] = useState(0);

    const handlePress = async () => {

        try {
            const response = await convert(selectedCurrency.value, targetCurrency.value, inputValue);
            console.log(response);
            setResult(response?.result?.convertedAmount.toFixed(2) || 0);
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchSupportedCurrencies();
            setCurrency(response);
        };

        fetchData();
    }, []);
    // console.log(currency);

    const dropdownData = currency.map((currency) => ({
        label: `${currency.name} (${currency.symbol})`,

    }));

    return (
        <View style={styles.container}>


            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={currency.map((currency) => ({
                    label: `${currency.name} (${currency.symbol})`,
                    value: currency.symbol,
                }))
                }
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={selectedCurrency}
                onChange={(value) => {
                    setSelectedCurrency(value);

                }
                }

            />
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={currency.map((currency) => ({
                    label: `${currency.name} (${currency.symbol})`,
                    value: currency.symbol,
                }))
                }
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={targetCurrency}
                onChange={(value) => {
                    setTargetCurrency(value);

                }
                }

            />

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, borderRadius: 10, marginTop: 20, padding: 10 }}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
                placeholder='Enter Amount'
                keyboardType='numeric'
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>Result: {result}</Text>
            <Button title='Convert' onPress={() => handlePress()} />
        </View>
    )
}

export default Currency

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainer: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})