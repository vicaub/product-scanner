import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ART,
} from 'react-native';
import Theme from '../Theme';

const {
    Surface,
    Group,
    Rectangle,
    Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as format from 'd3-format';
import * as axis from 'd3-axis';

const d3 = {
    scale,
    shape,
    format,
    axis
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';


class Area extends Component {

    constructor(props) {
        super(props);
        this.state = { highlightedIndex: 0 };
    }

    _createAreaChart(index) {
        let area = d3.shape.area()
            .x((item, index) => index * 15)
            .y1((item) => -item.value)
            .curve(d3.shape.curveNatural)
            (index);

        return {
            path: area
        };
    }

    render() {
        const margin = styles.container.margin;
        const x = margin;
        const y = this.props.height - margin;

        return (
            <View width={this.props.width} height={this.props.height}>
                <Surface width={this.props.width} height={this.props.height}>
                    <Group x={x} y={y}>
                        <Shape
                            fill={this.props.color}
                            stroke={this.props.color}
                            d={this._createAreaChart(this.props.data).path}
                        />
                    </Group>
                </Surface>
            </View>
        );
    }
}

export default Area;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});