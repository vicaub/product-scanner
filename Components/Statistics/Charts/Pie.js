import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ART,
    TouchableWithoutFeedback,
} from 'react-native';
import Theme from '../Theme';

const {
    Surface,
    Group,
    Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

const d3 = {
    scale,
    shape,
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';


class Pie extends Component {

    constructor(props) {
        super(props);
        this.state = { highlightedIndex: 0 };
        // this._createPieChart = this._createPieChart.bind(this);
        // this._value = this._value.bind(this);
        // this._label = this._label.bind(this);
        // this._onPieItemSelected = this._onPieItemSelected.bind(this);
    }

    _value(item) { return item.number; }

    _label(item) { return item.name; }

    _createPieChart(index) {
        let arcs = d3.shape.pie()
            .value(this._value)
            (this.props.data);

        let hightlightedArc = d3.shape.arc()
            .outerRadius(this.props.pieWidth/2 + 10)  // Radius of the pie
            .padAngle(.05)  // Angle between sections
            .innerRadius(30);  // Inner radius: to create a donut or pie

        let arc = d3.shape.arc()
            .outerRadius(this.props.pieWidth/2)
            .padAngle(.05)
            .innerRadius(30);

        let arcData = arcs[index];
        let path = (this.state.highlightedIndex === index) ? hightlightedArc(arcData) : arc(arcData);
        return {
            path,
            color: Theme.colors[index],
        };
    }

    _onPieItemSelected(index) {
        this.setState({highlightedIndex: index});
        this.props.onItemSelected(index);
    }

    render() {
        const margin = styles.container.margin;
        const x = this.props.pieWidth / 2 + margin;
        const y = this.props.pieHeight / 2 + margin;

        return (
            <View width={this.props.width} height={this.props.height}>
                <Surface width={this.props.width} height={this.props.height}>
                    <Group x={x} y={y}>
                        {
                            this.props.data.map( (item, index) => {
                                return (<Shape
                                    key={'pie_shape_' + index}
                                    fill={Theme.colors[index]}
                                    stroke={Theme.colors[index]}
                                    d={this._createPieChart(index).path}
                                />)
                            } )
                        }
                    </Group>
                </Surface>
                <View style={{position: 'absolute', top:margin, left: 2*margin + this.props.pieWidth}}>
                    {
                        this.props.data.map( (item, index) =>
                        {
                            let fontWeight = this.state.highlightedIndex === index ? 'bold' : 'normal';
                            return (
                                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(index)}>
                                    <View>
                                        <Text
                                            style={[styles.label, {color: Theme.colors[index], fontWeight: fontWeight}]}>
                                            {this._label(item)}: {this._value(item)}%
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

export default Pie;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'normal',

    }
});