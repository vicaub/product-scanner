
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList } from 'react-native';
import products from '../Helper/productData'
import ProductItem from './ProductItem'

class HistoryScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ProductItem product={item}/>}
                />
            </View>
        );
    }
}

export default HistoryScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});