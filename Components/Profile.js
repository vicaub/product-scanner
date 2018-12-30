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
                name: "",
                username: "",
                birthDate: new Date("1979/01/01"),
                gender: "",
            },
        }
    }

    componentDidMount() {
        // fetch user info
        this.setState({
            user: {
                name: "Name",
                username: "Pseudo",
                birthDate: new Date("1999/01/01"),
                gender: "F",
            },
        });
    }

    _handleEdit() {
        this.props.navigation.navigate("Update", {user: this.state.user});
    }

    _handleAllergies() {
        this.props.navigation.navigate("Allergies", {userId: this.state.user.username});
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
                <Button
                    title="Mes allergies"
                    onPress={() => this._handleAllergies()}
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

export default Profile;