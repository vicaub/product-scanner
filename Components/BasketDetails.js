import React, {Component} from 'react';
import {StyleSheet, Platform, View, Text, FlatList, TouchableOpacity} from 'react-native';
import baskets from '../Helper/basketData'
import ProductItem from './ProductItem'
import {getProductInfoFromApi} from "../API/OFFApi";

class BasketDetails extends Component {

    constructor(props) {
        super(props);
        this.basketId = this._getBasketFromId(this.props.navigation.getParam('basketId'));
        this._getBasketFromId(this.basketId);
    }


    _searchInfo(code, cartCounter) { //3103220025338
        this.props.navigation.navigate("Product", {barcode: code, fromBasket: true, cartCounter});
    }

    _getBasketFromId(basketId) {
        for (let i = 0; i < baskets.length; i++) {
            if (baskets[i].id === basketId) {
                this.basket = baskets[i]
            }
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={this.basket.products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this._searchInfo(item.id, item.quantity)}>
                            <ProductItem product={item}/>
                        </TouchableOpacity>)}
                />
            </View>
        );
    }
}

export default BasketDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});