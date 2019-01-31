import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ProductItem from './ProductItem'
import BasketService from "../Services/BasketService";
import ProductService from "../Services/ProductService";

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
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({basketObject: BasketService.findBasketByTimestamp(this.state.basketId)});
            }
        );
    }

    componentWillUnmount() {
        this.willFocus.remove();
    }

    _navigateToProduct(code, cartCounter) {
        this.props.navigation.navigate("Product", {barcode: code, fromBasket: true, cartCounter});
    }

    render() {
        if (this.state.basketObject && this.state.basketObject.content.length > 0) {
            return (
                <View style={styles.mainContainer}>
                    <FlatList
                        data={this.state.basketObject.content}
                        keyExtractor={(item) => item.barcode.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => this._navigateToProduct(item.barcode, item.quantity)}>
                                <ProductItem product={ProductService.fetchProduct(item.barcode)}
                                             cartCounter={item.quantity}/>
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