'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import moment from 'moment';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Name",
                username: "Pseudo",
                birthDate: new Date("1999/01/01"),
                // allergies: "Allergies",
            }
        }
    }

    _handleEdit() {
        this.props.navigation.navigate("Update", {user: this.state.user});
    }

    render() {
        const { user } = this.state;
        return (
            <View style={styles.container}>
                <Button
                    title="Modifier"
                    onPress={() => this._handleEdit()}
                />
                <Text>
                    Nom : { user.name }
                </Text>
                <Text>
                    Pseudo : { user.username }
                </Text>
                <Text>
                    Date de naissance : { moment(user.birthDate).format('L') }
                </Text>
                <Text>
                    Allergies : { user.allergies }
                </Text>
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

export default Profile;