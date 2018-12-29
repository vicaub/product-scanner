'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View
} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';

const Form = t.form.Form;

const Allergen = t.struct({
    id: t.String,
    name: t.String,
});

const User = t.struct({
    name: t.String,
    username: t.String,
    birthDate: t.maybe(t.Date),
    allergies: t.maybe(t.list(Allergen)),
});

const options = {
    fields: {
        name: {
            label: 'Nom',
        },
        username: {
            label: 'Pseudo',
        },
        birthDate: {
            label: 'Date de naissance',
            mode: 'date',
            config: {
                format: (date) => moment(date).format('L'),
                dialogMode: 'spinner',
            }
        },
        allergies: {
            item: {
                fields: {
                    
                }
            }
        }
    },
    i18n: {
        optional: ' (optionnel)',
        required: '',
        add: 'Ajouter',   // add button
        remove: '✘',  // remove button
        up: '↑',      // move up button
        down: '↓'     // move down button
    },
    disableOrder: true
};

class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user'),
        }
    }

    handleSubmit() {
        if (this._form) {
            const value = this._form.getValue(); // use that ref to get the form value
            if (value) {
                console.log('value: ', value);
                // save new values
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Form 
                    ref={c => this._form = c}
                    type={User} 
                    options={options}
                    value={this.state.user}
                />
                <Button 
                    title="Enregistrer"
                    onPress={() => this.handleSubmit()}
                />
            </View>
        )
    }
}

export default UpdateProfile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
});