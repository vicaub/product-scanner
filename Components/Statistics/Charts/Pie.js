import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import Theme from '../Theme';
import moment from 'moment';
import 'moment/locale/fr';

class Pie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSliceLabel: props.selectedSliceLabel,
        }
    }

    _onPieItemSelected(key, index) {
        this.setState({ selectedSliceLabel: key, });
        this.props.onItemSelected(index, key);
    }

    render() {
        const { selectedSliceLabel } = this.state;
        const colors = this.props.colors;
        const keys = this.props.data.keys;
        const values = this.props.data.values;

        const data = keys.map((key, index) => {
            return {
                key,
                value: values[index],
                svg: { fill: colors[index] },
                arc: { outerRadius: selectedSliceLabel === key ? '100%' : '90%', padAngle: 0.03 },
                onPress: () => this._onPieItemSelected(key, index)
            }
        });

        return (
            <View>
                <Text style={styles.caption}>{moment(this.props.basketId).locale('fr').format('L')}</Text>
                <PieChart
                    style={{ height: this.props.pieHeight, width: this.props.pieWidth, marginLeft: 'auto', marginRight: 'auto' }}
                    outerRadius={'90%'}
                    innerRadius={30}
                    data={data}
                />
                <View style={styles.container}>
                    {
                        keys.map( (item, index) =>
                        {
                            let fontWeight = selectedSliceLabel === item ? 'bold' : 'normal';
                            return (
                                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(item, index)}>
                                    <Text
                                        style={[styles.label, {color: Theme.colors[index], fontWeight: fontWeight}]}>
                                        {keys[index]}: {values[index]}%
                                    </Text>
                                </TouchableWithoutFeedback>
                            );
                        })
                    }
                    <Text style={styles.helper}>Psst... Sélectionnez une catégorie pour voir son évolution dans vos paniers !</Text>
                </View>
            </View>
        )
    }
}

Pie.propTypes = {
    data: PropTypes.shape({
        keys: PropTypes.arrayOf(PropTypes.string),
        values: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    pieWidth: PropTypes.number.isRequired,
    pieHeight: PropTypes.number.isRequired,
    onItemSelected: PropTypes.func.isRequired,
    selectedSliceLabel: PropTypes.string.isRequired,
};

export default Pie;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    caption: {
        marginTop: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5,
        fontWeight: 'normal',
    },
    helper: {
        marginTop: 20,
        fontSize: 10,
        color: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
    }
});