
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import Statistics from '../Components/Statistics';
import { headerStyle, mainColor } from './HeaderStyle';

const StatsStackNavigator = createStackNavigator({
    Stats: {
        screen: Statistics,
        navigationOptions: ({ navigation }) => ({
            title: 'Analyse diététique',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,

            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
});

export default StatsStackNavigator;