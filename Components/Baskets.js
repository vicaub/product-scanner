
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity } from 'react-native';
import baskets from '../Helper/basketData'
import BasketItem from './BasketItem'

class BasketsScreen extends Component {

    _getBasketFromDB(basketId) {
        this.props.navigation.navigate("BasketDetails", {basketId: basketId});
        // TODO: récupérer les paniers
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={baskets}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={ () => this._getBasketFromDB(item.id)}>
                            <BasketItem basket={item}/>
                        </TouchableOpacity>)}
                />
            </View>
        );
    }
}

export default BasketsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});