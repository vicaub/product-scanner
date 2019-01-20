import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native';
import Pie from './Charts/Pie';
import Area from './Charts/Area';
import Line from './Charts/Line';
import Theme from './Theme';
import data from '../../Helpers/chartsData';



let testData = [
    {date: new Date(2007, 3, 24), value: 93.24},
    {date: new Date(2007, 3, 25), value: 95.35},
    {date: new Date(2007, 3, 26), value: 98.84},
    {date: new Date(2007, 3, 27), value: 99.92},
    {date: new Date(2007, 3, 30), value: 99.80},
    {date: new Date(2007, 4,  1), value: 99.47},
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
                    />
                    <Text style={styles.chartTitle}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
                    <Area
                        width={width}
                        height={height}
                        data={this.state.spendingsPerYear}
                        color={Theme.colors[this.state.activeIndex]} />
                    <Line
                        width={width}
                        height={height}
                        data={testData}
                        color={Theme.colors[this.state.activeIndex]} />
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