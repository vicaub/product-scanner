
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HamburgerIcon from './HamburgerIcon';
import Profile from '../Components/Profile';
import UpdateProfile from '../Components/UpdateProfile';
import Allergies from '../Components/Allergies';

const ProfileStackNavigator = createStackNavigator({
    UserProfile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Mon profil',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#00C378'
            },
            headerTintColor: '#fff',
        })
    },
    Update: {
        screen: UpdateProfile,
        navigationOptions: () => ({
            title: 'Modifier mes informations',
            headerStyle: {
                backgroundColor: '#00C378'
            },
            headerTintColor: '#fff',
        })
    },
    Allergies: {
        screen: Allergies,
        navigationOptions: () => ({
            title: 'Mes allergies',
            headerStyle: {
                backgroundColor: '#00C378'
            },
            headerTintColor: '#fff',
        })
    }
});

export default ProfileStackNavigator;