import React, { Component } from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import PropTypes from "prop-types";

class Bar extends Component {

    render() {

        const fill = this.props.color;
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ];

        return (
            <BarChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>
        )
    }

}

Bar.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Bar;