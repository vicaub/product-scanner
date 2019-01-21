import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from "../Components/Product";
import BasketsScreen from "../Components/Baskets";
import BasketDetails from "../Components/BasketDetails";

const MyBasketsStackNavigator = createStackNavigator({
    Baskets: {
        screen: BasketsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Mes Paniers',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
            headerRight: <View></View>,
            headerTitleStyle: {
                fontFamily: 'Lobster-Regular',
                fontWeight: 'normal',
                fontSize: 30,
                textAlign: 'center',
                flex: 1,
                marginTop: 5,
            },
            headerTintColor: '#00C378',
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    Product: {
        screen: ProductScreen,
        navigationOptions: () => ({
            title: 'Détails Produit',
            headerRight: <View></View>,
            headerTitleStyle: {
                fontFamily: 'Lobster-Regular',
                fontWeight: 'normal',
                fontSize: 30,
                textAlign: 'center',
                flex: 1,
                marginTop: 5,
            },
            headerTintColor: '#00C378',
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    BasketDetails: {
        screen: BasketDetails,
        navigationOptions: ({ navigation }) => ({
            title: 'Détails du Panier',
            headerRight: <View></View>,
            headerTitleStyle: {
                fontFamily: 'Lobster-Regular',
                fontWeight: 'normal',
                fontSize: 30,
                textAlign: 'center',
                flex: 1,
                marginTop: 5,
            },
            headerTintColor: '#00C378',
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },

});

export default MyBasketsStackNavigator;