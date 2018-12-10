
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MyHomeScreen from '../Components/Home';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from '../Components/Product';

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: MyHomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Accueil',
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