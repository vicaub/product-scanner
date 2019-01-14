

import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity } from 'react-native';
import products from '../Helper/productData'
import ProductItem from './ProductItem'

class HistoryScreen extends Component {
    _searchInfo(code) { //3103220025338
        this.props.navigation.navigate("Product", {barcode: code});
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={ () => this._searchInfo(item.id)}>
                            <ProductItem product={item}/>
                        </TouchableOpacity>)}
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