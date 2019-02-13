import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';
import AxesLine from './Charts/AxesLine';
import AxesStackedBar from './Charts/AxesStackedBar';
import Pie from './Charts/Pie';
import Theme from './Theme';
import ProductService from '../../Services/ProductService';
import BasketService from '../../Services/BasketService';
import OupsScreen from '../Common/Oups';
import Loader from '../Common/Loader';
import {
    groupByCategories,
    quantityInCategory,
    categoriesByBasket,
    getAllCategoriesFromBaskets,
    scoresByBasket,
    averageScore,
    getNumberOfScans,
} from "./Functions";
import getTotalQuantityInBasket from "../../Helper/basketHelper";


class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            activeKey: '',
            categories: [],
            nbScans: 0,
            nbBaskets: 0,
            baskets: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            () => {
                this._fetchData();
            }
        );
    }

    _fetchData() {
        let nbScans = getNumberOfScans(ProductService.findAll());
        let baskets = BasketService.findAll();
        baskets = baskets.filter(getTotalQuantityInBasket);
        let categories = baskets.length > 0 ? getAllCategoriesFromBaskets(baskets) : [];
        let latestBasketData = baskets.length > 0 ? groupByCategories(baskets[0], categories) : [];
        if (baskets.length > 0) categories = latestBasketData.keys;
        this.setState({
            baskets,
            nbScans,
            nbBaskets: baskets.length,
            categories,
            activeIndex: 0,
            activeKey: categories.length > 0 ? categories[0] : 0,
            isLoading: false,
        });
    }

    componentWillUnmount() {
        this.willFocus.remove();
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        }
    }

    _onPieItemSelected(newIndex, newKey) {
        this.setState({
            activeIndex: newIndex,
            activeKey: newKey,
        });
    }

    _displayStats() {
        const { baskets, categories, activeIndex, activeKey, nbScans, nbBaskets, isLoading } = this.state;
        let avgScore = averageScore(baskets);

        if (!isLoading) {
            if (baskets.length > 0) {
                return (
                    <View style={styles.container}>
                        {/* Statistics */}
                        <View>
                            <Text style={styles.nbStat}>
                                <Text style={styles.bigNumber}>{nbScans}</Text> scan(s)
                            </Text>
                            <Text style={styles.nbStat}>
                                <Text style={styles.bigNumber}>{nbBaskets}</Text> panier(s)
                            </Text>
                            <Text style={styles.nbStat}>
                                Score moyen : <Text style={[styles.bigNumber, {color: Theme.scoresColors[avgScore[1]]}]}>{avgScore[0]}</Text>
                            </Text>
                        </View>

                        {/* Pie Chart */}
                        <Text style={styles.chartTitle}>Distribution du dernier panier</Text>
                        <Pie
                            pieWidth={200}
                            pieHeight={200}
                            onItemSelected={(newIndex, key) => this._onPieItemSelected(newIndex, key)}
                            colors={Theme.colors}
                            basketId={baskets[0].dayTimestamp}
                            data={groupByCategories(baskets[0], categories)}
                            selectedSliceLabel={activeKey}/>
                        <Text style={styles.helper}>Psst... Sélectionnez une catégorie pour voir son évolution dans vos paniers !</Text>

                        {/* Line Chart */}
                        <Text style={styles.chartTitle}>Achats de {activeKey} par panier</Text>
                        <AxesLine
                            color={Theme.colors[activeIndex]}
                            data={quantityInCategory(baskets, activeKey)} />

                        {/* Stacked Bar Chart - Categories */}
                        <Text style={styles.chartTitle}>Distribution des catégories</Text>
                        <AxesStackedBar
                            data={categoriesByBasket(baskets, categories)}
                            keys={categories}
                            colors={Theme.colors}
                        />

                        {/* Stacked Bar Chart - Nutrition Grade */}
                        <Text style={styles.chartTitle}>Distribution des scores nutritionnels</Text>
                        <AxesStackedBar
                            keys={['a', 'b', 'c', 'd', 'e', 'unspecified']}
                            data={scoresByBasket(baskets)}
                            colors={Theme.scoresColors} />
                        <Image
                            style={{width: '60%', height: 120, marginRight: 'auto', marginLeft: 'auto'}}
                            source={require('../../assets/images/nutriscores.png')}
                        />
                    </View>
                );
            } else {
                return (
                    <View style={styles.oupsContainer}>
                        <OupsScreen message="Vous n'avez pas encore de panier... Créez-en un pour obtenir votre analyse diététique !"/>
                    </View>
                );
            }
        }
    }

    render() {
        return (
            <ScrollView>
                {this._displayLoading()}
                {this._displayStats()}
            </ScrollView>
        );
    }
}

export default Statistics;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'whitesmoke',
        marginTop: 21,
    },
    oupsContainer: {
        marginTop: 150,
    },
    chartTitle: {
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor:'white',
        color: 'grey',
        fontWeight:'bold',
    },
    nbStat: {
        textAlign: 'center',
        backgroundColor:'white',
    },
    bigNumber: {
        fontSize: 30,
    },
    helper: {
        fontSize: 10,
        marginBottom: 5,
        color: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
    }
});