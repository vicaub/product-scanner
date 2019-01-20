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
    Rectangle
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
import Theme from "../Theme";


class Stack extends Component {

    constructor(props) {
        super(props);
        this.state = { highlightedIndex: 0 };
    }

    createStackChart(data) {
        let stacks = d3.shape.stack()
            .keys(["apples", "bananas", "cherries", "dates"])
            .order(d3.stackOrderNone)
            .offset(d3.stackOffsetNone)
            (data);

        let stacking = d3.shape.area()
            .x0((d) => { return d[0] })
            .y1((d) => {return d[1] });

        let paths = [];

        stacks.map((stack) => {
            paths.push(stacking(stack));
        });

        console.warn(paths);

        return {
            path: paths
        };
    }

    _createStackChart(index) {
        let stacks = d3.shape.stack()
            .keys(["apples", "bananas", "cherries", "dates"])
            .order(d3.stackOrderNone)
            .offset(d3.stackOffsetNone)
            (this.props.data);

        let areaData = stacks[index];

        let stacking = d3.shape.area()
            .x0((d) => { return d[0] })
            .y1((d) => {return d[1] });

        let path = stacking(areaData);

        // stacks.map((stack) => {
        //     paths.push(stacking(stack));
        // });

        console.warn(path);

        return {
            path: path
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
                        {
                            this.props.data.map((item, index) => {
                                return (
                                    <Shape
                                        key={'bar_shape_' + index}
                                        fill={Theme.colors[index]}
                                        stroke={Theme.colors[index]}
                                        d={this._createStackChart(index).path}
                                    />
                                )
                            })
                        }
                    </Group>
                </Surface>
            </View>
        );
    }
}

export default Stack;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});