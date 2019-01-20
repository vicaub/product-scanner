import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class Statistics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.homeContainer}>
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