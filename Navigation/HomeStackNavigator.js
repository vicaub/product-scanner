
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MyHomeScreen from '../Components/Home';
import HamburgerIcon from './HamburgerIcon';

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
});

export default HomeStackNavigator;