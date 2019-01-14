

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
//import products from '../Helper/productData';
import ProductItem from './ProductItem';
import OupsScreen from './Common/Oups';
import ProductService from '../Services/ProductService';

class HistoryScreen extends Component {
    _searchInfo(code) { //3103220025338
        this.props.navigation.navigate("Product", {barcode: code, update : false});
    }


    constructor(props) {
        super(props);
        this.state = {
            products: undefined,
        }
    }


    componentDidMount(){
        this.setState({
            products: ProductService.findAll() ,
        });
    }

    render() {
        if (this.products.length > 0) {
            return (
                <View style={styles.mainContainer}>
                    <FlatList
                        data= {this.products}
                        keyExtractor={(item) => item.barCode}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={ () => this._searchInfo(parseInt(item.barCode))}>
                                <ProductItem product={item}/>
                            </TouchableOpacity>)}
                    />
                </View>
            );
        } else {
            return (
                <OupsScreen message="Vous n'avez pas encore scanné de produit ! Commencez par scanner un produit depuis l'écran d'accueil. Vous retrouverez tous vos scans ici !"/>
            );
        }
    }
}

export default HistoryScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
});