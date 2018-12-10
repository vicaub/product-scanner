
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeStackNavigator from "./HomeStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";
import CameraStackNavigator from "./CameraStackNavigator";

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStackNavigator,
        navigationOptions: {
            title: 'Accueil',
        }
    },
    History: {
        screen: HistoryStackNavigator,
        navigationOptions: {
            title: 'Historique'
        }
    },
    Camera: {
        screen: CameraStackNavigator,
        navigationOptions: {
            title: 'Camera'
        }
    }
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
