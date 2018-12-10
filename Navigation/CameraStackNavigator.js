
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BarcodeScanner from '../Components/Camera';
import HamburgerIcon from './HamburgerIcon';

const CameraStackNavigator = createStackNavigator({
    History: {
        screen: BarcodeScanner,
        navigationOptions: ({ navigation }) => ({
            title: 'Camera',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#4CA751'
            },
            headerTintColor: '#fff',
        })
    },
});

export default CameraStackNavigator;