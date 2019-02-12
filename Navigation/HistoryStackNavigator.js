
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HistoryScreen from '../Components/History';
import HamburgerIcon from './HamburgerIcon';
import ProductScreen from '../Components/Product';
import { headerStyle, mainColor } from './HeaderStyle';

const HistoryStackNavigator = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Mes Scans',
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
    }
});

export default HistoryStackNavigator;