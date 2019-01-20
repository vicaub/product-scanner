import React, {Component} from 'react';
import {StyleSheet, Platform, View, Text, FlatList, TouchableOpacity} from 'react-native';
import baskets from '../Helper/basketData'
import ProductItem from './ProductItem'
import {getProductInfoFromApi} from "../API/OFFApi";

class BasketDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            basketId: this.props.navigation.getParam('basketId'),
        };
    }

    /**
     * Get basket from DB and update state
     */
    componentDidMount() {
        this.setState({basket: BasketDetails._getBasketFromId(this.state.basketId)});
    }

    /**
     * return basket object from basket id in bdd
     */
    static _getBasketFromId(basketId) {
        for (let i = 0; i < baskets.length; i++) {
            if (baskets[i].id === basketId) {
                return baskets[i];
            }
        }
    }

    _navigateToProduct(code, cartCounter) {
        this.props.navigation.navigate("Product", {barcode: code, fromBasket: true, cartCounter});
    }

    render() {
        if (this.state.basket) {
            return (
                <View style={styles.mainContainer}>
                    <FlatList
                        data={this.state.basket.products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => this._navigateToProduct(item.id, item.quantity)}>
                                <ProductItem product={item}/>
                            </TouchableOpacity>)}
                    />
                </View>
            );
        } else {
            // TODO: if it takes some time to get basket from DB, display loading
            return null;
        }
    }
}

export default BasketDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});