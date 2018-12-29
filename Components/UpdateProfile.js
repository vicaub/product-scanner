'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View
} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    name: t.String,
    username: t.String,
    birthDate: t.maybe(t.Date),
    allergies: t.maybe(t.String),
});

const options = {
    fields: {
        birthDate: {
            mode: 'date' // display the Date field as a DatePickerAndroid
        }
    }
};

export default class UpdateProfile extends Component {

    handleSubmit() {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }

    render() {
        console.log(this.props.navigation.getParam('user'));
        return (
            <View style={styles.container}>
                <Form 
                    ref={c => this._form = c}
                    type={User} 
                    options={options}
                />
                <Button 
                    title="Enregistrer"
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
});