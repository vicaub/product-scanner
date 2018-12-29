
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeStackNavigator from "./HomeStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const DrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            title: 'Mon profil',
        }
    },
    Home: {
        screen: HomeStackNavigator,
        navigationOptions: {
            title: 'Accueil',
        }
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            title: 'Recherche'
        }
    },
    History: {
        screen: HistoryStackNavigator,
        navigationOptions: {
            title: 'Historique'
        }
    },
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
