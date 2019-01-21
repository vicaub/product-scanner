import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class ActionButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} 
                style={[styles.button, { backgroundColor: this.props.color}]}>
                <Text style={styles.buttonTitle}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default ActionButton;

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    buttonTitle: {
        color: '#fff',
        fontWeight: 'bold',
    }
});