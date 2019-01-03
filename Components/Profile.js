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
import UserService from '../Services/UserService';
import UpdateProfile from './UpdateProfile';

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
        moment.locale('fr');
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.fetchUserInfo();
            }
        );
    }

    componentWillUnmount() {
        this.willFocus.remove();
    }

    fetchUserInfo() {
        let userList = UserService.findAll();
        console.log(userList);
        if (userList.length > 0) {
            let user = userList[0];
            this.setState({
                user: {
                    name: user.name,
                    username: user.username,
                    birthDate: user.birthDate,
                    gender: user.gender,
                },
                isLoading: false,
            });
        } else {
            this.setState({
                isLoading: false,
            })
        }
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
        this.props.navigation.navigate("Update", {user: this.state.user, new: false});
    }

    _handleCreate() {
        this.props.navigation.navigate("Create", {user: this.state.user, new: true});
    }

    _handleAllergies() {
        this.props.navigation.navigate("Allergies", {userId: this.state.user.username});
    }

    _displayProfile() {
        const { user, isLoading } = this.state;
        if (!isLoading) {
            if (user.username.length > 0) {
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
                                { user.birthDate ? 'Date de naissance : ' + moment(user.birthDate).format('L') : '' }
                            </Text>
                            <Text>
                                { user.gender && user.gender.length > 0 ?
                                    'Genre : ' + user.gender
                                    : ''
                                }
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
            } else {
                return (
                    <View style={styles.container}>
                        <View style={styles.center}>
                            <Text style={styles.name}>
                                Bienvenue !
                            </Text>
                            <Text style={styles.info}>
                                Créez un compte pour pouvoir renseigner vos allergies et être mieux accompagné(e).
                                Vos informations ne seront conservées que sur cet appareil.
                            </Text>
                            <View>
                                <ActionButton
                                    title="Créer"
                                    color="#00C378"
                                    onPress={() => this._handleCreate()}
                                />
                            </View>
                        </View>
                    </View>
                )
            }
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
    info: {
        paddingTop: 50,
        paddingBottom: 150,
        textAlign: 'center',
    }
});

export default Profile;