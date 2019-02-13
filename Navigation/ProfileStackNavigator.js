
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import Profile from '../Components/Profile';
import UpdateProfile from '../Components/UpdateProfile';
import Allergies from '../Components/Allergies';
import { headerStyle, mainColor } from './HeaderStyle';

const ProfileStackNavigator = createStackNavigator({
    UserProfile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Mon profil',
            headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
            
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    Create: {
        screen: UpdateProfile,
        navigationOptions: () => ({
            title: 'Créer',
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    Update: {
        screen: UpdateProfile,
        navigationOptions: () => ({
            title: 'Modifier',
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    },
    Allergies: {
        screen: Allergies,
        navigationOptions: () => ({
            title: 'Mes allergies',
            headerRight: <View></View>,
            headerTitleStyle: headerStyle,
            headerTintColor: mainColor,
            headerStyle: {
                backgroundColor: '#fff',
            }
        })
    }
});

export default ProfileStackNavigator;