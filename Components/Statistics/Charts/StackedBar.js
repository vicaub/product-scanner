import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackedBarChart } from 'react-native-svg-charts';

class StackedBar extends Component {

    render() {

        const colors = this.props.colors;

        return (
            <StackedBarChart
                style={ { height: 200 } }
                keys={ this.props.keys }
                colors={ colors }
                data={ this.props.data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
            />
        )
    }

}

StackedBar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StackedBar;