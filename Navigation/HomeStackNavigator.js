
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from '../Components/Product';
import BarcodeScanner from '../Components/Camera';
import { headerStyle, mainColor } from './HeaderStyle';

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: BarcodeScanner,
        navigationOptions: ({ navigation }) => ({
            title: 'Scanner',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
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
    }
});

export default HomeStackNavigator;