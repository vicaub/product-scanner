
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../Components/Search';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from "../Components/Product";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Recherche',
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

export default SearchStackNavigator;