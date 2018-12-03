
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HistoryScreen from '../Components/History';
import HamburgerIcon from './HamburgerIcon';

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
});

export default HistoryStackNavigator;