import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

class Loader extends Component {

    render() {
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }
}

export default Loader;

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});