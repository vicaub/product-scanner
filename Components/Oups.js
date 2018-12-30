import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class OupsScreen extends Component {

    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.header}>Oups...</Text>
                <Text style={styles.infoText}>{this.props.message}</Text>
            </View>
        );
    }
}

export default OupsScreen;

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Lobster Regular',
        fontSize: 50,
    },
    infoText: {
        textAlign: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
});