'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Nom
                </Text>
                <Text>
                    Pseudo
                </Text>
                <Text>
                    Allergies
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});