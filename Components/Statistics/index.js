import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native';
import Pie from './Charts/Pie';
import Area from './Charts/Area';
import Bar from './Charts/Bar';
import Stack from './Charts/Stack';
import StackedBar from './Charts/StackedBar';
import Theme from './Theme';
import data from '../../Helpers/chartsData';
import {groupByCategories, groupAllByCategories} from "./Functions";

let testData = [
    {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
    {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
    {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
    {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
];

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            spendingsPerYear: data.spendingsPerYear,
        };
        // this._shuffle = this._shuffle.bind(this);
    }

    _onPieItemSelected(newIndex){
        this.setState({
            activeIndex: newIndex,
            spendingsPerYear: this._shuffle(data.spendingsPerYear)
        });
    }

    _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    render() {
        const height = 200;
        const width = 500;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.chartTitle}>Distribution of spending this month</Text>
                    <Pie
                        pieWidth={150}
                        pieHeight={150}
                        onItemSelected={(newIndex) => this._onPieItemSelected(newIndex)}
                        colors={Theme.colors}
                        width={width}
                        height={height}
                        data={data.spendingsLastMonth}
                        valueKey="number"
                        labelKey="name"
                    />
                    <Text style={styles.chartTitle}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
                    <Area
                        width={width}
                        height={height}
                        data={this.state.spendingsPerYear}
                        color={Theme.colors[this.state.activeIndex]} />

                    <Text style={styles.chartTitle}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
                    <Bar />
                    <StackedBar />

                    <Text style={styles.chartTitle}>Distribution of categories for last basket</Text>
                    <Pie
                        pieWidth={150}
                        pieHeight={150}
                        // onItemSelected={(newIndex) => this._onPieItemSelected(newIndex)}
                        colors={Theme.colors}
                        width={width}
                        height={height}
                        data={groupByCategories(data.baskets[0])}
                        valueKey="number"
                        labelKey="category"
                    />
                    <Text style={styles.chartTitle}>Distribution of categories for all baskets</Text>
                    <Pie
                        pieWidth={150}
                        pieHeight={150}
                        // onItemSelected={(newIndex) => this._onPieItemSelected(newIndex)}
                        colors={Theme.colors}
                        width={width}
                        height={height}
                        data={groupAllByCategories(data.baskets)}
                        valueKey="number"
                        labelKey="category"
                    />
                </View>
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
    chartTitle : {
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor:'white',
        color: 'grey',
        fontWeight:'bold',
    }
});