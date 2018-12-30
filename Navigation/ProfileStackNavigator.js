
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
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
    Update: {
        screen: UpdateProfile,
        navigationOptions: () => ({
            title: 'Modifier',
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
    Allergies: {
        screen: Allergies,
        navigationOptions: () => ({
            title: 'Mes allergies',
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
    }
});

export default ProfileStackNavigator;