
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MyHomeScreen from '../Components/Home';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from '../Components/Product';
import BarcodeScanner from "../Components/Camera";

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: BarcodeScanner,
        navigationOptions: ({ navigation }) => ({
            title: 'Scanner',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#4CA751'
            },
            headerTintColor: '#fff',
        })
    },
    Product: {
        screen: ProductScreen,
        navigationOptions: () => ({
            title: 'Détails Produit',
            headerStyle: {
                backgroundColor: '#4CA751'
            },
            headerTintColor: '#fff',
        })
    }
});

export default HomeStackNavigator;