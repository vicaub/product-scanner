'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import ActionButton from './Common/ActionButton';

const Form = t.form.Form;

const Gender = t.enums({
    M: 'Homme',
    F: 'Femme'
});

const User = t.struct({
    username: t.String,
    name: t.String,
    birthDate: t.maybe(t.Date),
    gender: t.maybe(Gender),
});

const options = {
    fields: {
        username: {
            label: 'Pseudo',
            editable: false,
        },
        name: {
            label: 'Nom',
        },
        birthDate: {
            label: 'Date de naissance',
            mode: 'date',
            config: {
                format: (date) => moment(date).format('L'),
                dialogMode: 'spinner',
            }
        },
        gender: {
            label: 'Genre',
            nullOption: {value: '', text: 'Choisir...'}
        },
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
        };
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
            <ScrollView>
                <View style={styles.container}>
                    <Form 
                        ref={c => this._form = c}
                        type={User} 
                        options={options}
                        value={this.state.user}
                    />
                    <View style={styles.bottomView}>
                        <ActionButton 
                            title="Sauvegarder"
                            color="#FFDC32"
                            onPress={() => this.handleSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default UpdateProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    /* button: {
        position: 'absolute',
        bottom: 0
    } */
});