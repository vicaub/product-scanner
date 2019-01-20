import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Pie from './Charts/Pie';
import Theme from './Theme';
import data from '../../Helpers/chartsData';

class Statistics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const height = 200;
        const width = 500;

        return (
            <View>
                <Pie
                    pieWidth={150}
                    pieHeight={150}
                    // onItemSelected={this._onPieItemSelected}
                    colors={Theme.colors}
                    width={width}
                    height={height}
                    data={data.spendingsLastMonth}
                />
            </View>
        );
    }
}

export default Statistics;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});