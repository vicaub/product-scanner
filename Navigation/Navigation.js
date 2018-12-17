
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeStackNavigator from "./HomeStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";

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
    }
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
