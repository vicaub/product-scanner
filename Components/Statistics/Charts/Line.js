import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ART,
} from 'react-native';

const {
    Surface,
    Group,
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
    scaleLinear,
    scaleTime,
} from 'd3-scale';

class Line extends Component {

    constructor(props) {
        super(props);
        this.state = { highlightedIndex: 0 };
    }

    _createLineChart(data) {
        let scaleTime = d3.scale.scaleTime()
            .domain([new Date(2000, 0, 1), new Date(2000, 0, 2)])
            .range([0, 960]);

        let area = d3.shape.line()
            .x((item) => { return scaleTime(item.date); })
            .y((item) => { return item.value })
            (data);

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
                            d={this._createLineChart(this.props.data).path}
                        />
                    </Group>
                </Surface>
            </View>
        );
    }
}

export default Line;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});