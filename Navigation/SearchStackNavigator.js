
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import SearchScreen from '../Components/Search';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from "../Components/Product";
import { headerStyle, mainColor } from './HeaderStyle';

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Recherche',
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

export default SearchStackNavigator;