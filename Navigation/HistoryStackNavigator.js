
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HistoryScreen from '../Components/History';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from "../Components/Product";

const HistoryStackNavigator = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Historique',
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

export default HistoryStackNavigator;