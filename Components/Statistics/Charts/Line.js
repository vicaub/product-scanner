import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Grid } from 'react-native-svg-charts';

class Line extends Component {

    render() {

        return (
            <LineChart
                style={{ flex: 1, height: 200  }}
                data={ this.props.data }
                svg={{ stroke: this.props.color }}
                contentInset={ this.props.contentInset }
            >
                <Grid/>
            </LineChart>
        )
    }

}


Line.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string.isRequired,
    contentInset: PropTypes.shape({
        left: PropTypes.number,
        right: PropTypes.number,
    }),
};

export default Line;