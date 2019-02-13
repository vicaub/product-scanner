import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from '../Components/Product';
import BasketsScreen from '../Components/Baskets';
import BasketDetails from '../Components/BasketDetails';
import { headerStyle, mainColor } from './HeaderStyle';

const MyBasketsStackNavigator = createStackNavigator({
    Baskets: {
        screen: BasketsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Mes Paniers',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
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
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
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
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },

});

export default MyBasketsStackNavigator;