import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    ActivityIndicator,
    Image,
} from 'react-native';
import AxesLine from './Charts/AxesLine';
import AxesStackedBar from './Charts/AxesStackedBar';
import Pie from './Charts/Pie';
import Theme from './Theme';
import ProductService from '../../Services/ProductService';
import BasketService from '../../Services/BasketService';
import {groupByCategories, quantityInCategory, categoriesByBasket, getAllCategoriesFromBaskets, scoresByBasket, averageScore} from "./Functions";

function getNumberOfScans(scans) {
    let sum = 0;
    scans.forEach((scan) => {
        sum += scan.nbScans;
    });
    return sum;
}

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
        let nbScans = getNumberOfScans(ProductService.findAll());
        // fetch user's baskets
        let baskets = BasketService.findAll();
        console.warn(baskets);
        let categories = getAllCategoriesFromBaskets(baskets);
        let latestBasketData = groupByCategories(baskets[0], categories);
        categories = latestBasketData.keys;
        this.setState({
            baskets,
            nbScans,
            nbBaskets: baskets.length,
            categories,
            activeIndex: 0,
            activeKey: categories[0],
            isLoading: false,
        });
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _onPieItemSelected(newIndex, newKey){
        this.setState({
            activeIndex: newIndex,
            activeKey: newKey,
        });
    }

    _displayStats() {
        const { baskets, categories, activeIndex, activeKey, nbScans, nbBaskets, isLoading } = this.state;
        let avgScore = averageScore(baskets);

        if (!isLoading) {
            return (
                <View style={styles.container}>
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
                    <Text style={styles.chartTitle}>Achats de{activeKey} par panier</Text>
                    <AxesLine
                        color={Theme.colors[activeIndex]}
                        data={quantityInCategory(baskets, activeKey)} />
                    <Text style={styles.chartTitle}>Distribution des catégories</Text>
                    <AxesStackedBar
                        keys={categories}
                        data={categoriesByBasket(baskets, categories)}
                        colors={Theme.colors} />
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
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
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