'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import ActionButton from './Common/ActionButton';

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
            isLoading: true,
        }
    }

    componentDidMount() {
        // fetch user info
        this.setState({
            user: {
                name: "Mary Poppins",
                username: "helloyou",
                birthDate: new Date("1999/01/01"),
                gender: "F",
            },
            isLoading: false,
        });
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _handleEdit() {
        this.props.navigation.navigate("Update", {user: this.state.user});
    }

    _handleAllergies() {
        this.props.navigation.navigate("Allergies", {userId: this.state.user.username});
    }

    _displayProfile() {
        const { user, isLoading } = this.state;
        if (!isLoading) {
            return (
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity onPress={() => this._handleEdit()} style={styles.smallButton}>
                            <Text>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.name}>
                            { user.name }
                        </Text>
                        <Text style={styles.username}>
                            @{ user.username }
                        </Text>
                        <Text style={styles.header}>
                            À propos
                        </Text>
                        <Text>
                            Date de naissance : { moment(user.birthDate).format('L') }
                        </Text>
                        <Text>
                            Genre : { user.gender }
                        </Text>
                    </View>
                    <View>
                        <ActionButton 
                            title="Mes allergies"
                            color="#00C378"
                            onPress={() => this._handleAllergies()}
                        />
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView>
                { this._displayLoading() }
                { this._displayProfile() }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    smallButton: {
        width: 80,
        height: 40,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    center: {
        margin: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 40,
        fontFamily: 'Lobster-Regular',
    },
    username: {
        fontSize: 20,
        marginBottom: 50,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
    },
});

export default Profile;