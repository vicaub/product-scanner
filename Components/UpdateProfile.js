'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    name: t.String,
    username: t.String,
    // birthDate: t.maybe(t.Date),
    allergies: t.maybe(t.String),
});

export default class UpdateProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Form type={User} />
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