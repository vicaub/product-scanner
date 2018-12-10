
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList } from 'react-native';
import films from '../Helper/productData'
import ProductItem from './ProductItem'

class HistoryScreen extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ProductItem product={item}/>}
                />
            </View>
        );
    }
}

export default HistoryScreen;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
});