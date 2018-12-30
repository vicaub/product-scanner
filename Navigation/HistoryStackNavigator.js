
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HistoryScreen from '../Components/History';
import HamburgerIcon from './HamburgerIcon';

const HistoryStackNavigator = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Historique',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
            headerRight: <View></View>,
            headerTitleStyle: {
                fontFamily: 'Lobster Regular',
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

export default HistoryStackNavigator;