
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity } from 'react-native';
import baskets from '../Helper/basketData'
import BasketItem from './BasketItem'

class BasketsScreen extends Component {
    _searchInfo(id) { //3103220025338
        this.props.navigation.navigate("BasketDetails", {basketId: id});
        // TODO: récupérer les paniers
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={baskets}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={ () => this._searchInfo(item.id)}>
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