
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import Statistics from '../Components/Statistics';

const StatsStackNavigator = createStackNavigator({
    Stats: {
        screen: Statistics,
        navigationOptions: ({ navigation }) => ({
            title: 'Analyse diététique',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,

            headerRight: <View></View>,
            headerTitleStyle: {
                fontFamily: 'Lobster-Regular',
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

export default StatsStackNavigator;