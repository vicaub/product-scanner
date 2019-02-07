
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, FlatList, TouchableOpacity } from 'react-native';
import getTotalQuantityInBasket from '../Helper/basketHelper'
import BasketItem from './BasketItem'
import BasketService from '../Services/BasketService';
import OupsScreen from "./Common/Oups";

class BasketsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({
                    baskets : this._removeEmptyBaskets(BasketService.findAll()),
                })
            }
        );
    }

    componentWillUnmount() {
        this.willFocus.remove();
    }

    _navigateToBasket(basket) {
        this.props.navigation.navigate("BasketDetails", {basketId: basket.dayTimestamp, fromBasket: true});
    }

    _removeEmptyBaskets(baskets) {
        for (let i = 0; i<baskets.length; i++) {
            // TODO: not working...
            if (getTotalQuantityInBasket(baskets[i]) <= 0) {
                baskets.splice(i, 1);
            }
        }
        return baskets
    }

    render() {
        if (this.state.baskets && this.state.baskets.length > 0) {
            return (
                <View style={styles.mainContainer}>
                    <FlatList
                        data={this.state.baskets}
                        keyExtractor={(item) => item.dayTimestamp.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={ () => this._navigateToBasket(item)}>
                                <BasketItem basket={item}/>
                            </TouchableOpacity>)}
                    />
                </View>
            );
        } else {
            return (
                <OupsScreen message="Vous n'avez pas encore de panier ! Commencez par scanner un produit depuis l'écran d'accueil et ajoutez-le à votre panier du jour !"/>
            );
        }
    }
}

export default BasketsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});