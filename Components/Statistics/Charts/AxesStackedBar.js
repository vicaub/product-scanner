import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { XAxis } from 'react-native-svg-charts';
import StackedBar from './StackedBar';
import moment from 'moment';
import 'moment/locale/fr';

class AxesStackedBar extends Component {

    render() {
        const xAxisSvg = {
            fontSize: 8,
            fill: 'grey',
            fontWeight: 'bold',
        };
        const xAxisHeight = 20;
        console.warn(this.props.data);

        return (
            <View style={{ height: 250, padding: 10, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <StackedBar
                        keys={ this.props.keys }
                        data={ this.props.data }
                        colors={ this.props.colors } />
                    <XAxis
                        style={{ marginHorizontal: 50, height: xAxisHeight }}
                        data={ this.props.data }
                        svg={ xAxisSvg }
                        formatLabel={value => moment(this.props.data[value].date).locale('fr').format('L')}
                        xAccessor={ ({ item, index }) => index }
                        contentInset={{ left: 30, right: 30 }}
                    />
                </View>
            </View>
        )
    }

}

AxesStackedBar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AxesStackedBar;