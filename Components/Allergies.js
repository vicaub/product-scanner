'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { getAllergensFromApi } from '../API/OFFApi';
import ActionButton from './Common/ActionButton';
import UserService from '../Services/UserService';
import OupsScreen from './Common/Oups';
import Loader from './Common/Loader';

class Allergies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            allergens: [],
            isLoading: true,
            isConnected: true,
        };
    }

    componentDidMount() {
        getAllergensFromApi().then((data) => {
            let user = UserService.findAll()[0];
            let allergies = user.allergies.map((allergy) => allergy.id);
            this.setState({
                selectedItems: allergies,
                allergens: data,
                isLoading: false,
            });
        })
            .catch((error) =>
                this.setState({isConnected:false, isLoading: false})
            );;
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    handleSubmit() {
        let allergies = this.state.selectedItems.map((item) => {
            return this.state.allergens.find(allergen => allergen._id === item).obj;
        });
        UserService.update({
            username: this.props.navigation.getParam('userId'),
            allergies,
        }, () => {
            this.props.navigation.goBack();
        });
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        }
    }

    _displayAllergies() {
        const { selectedItems, allergens, isLoading, isConnected } = this.state;
        if (!isLoading & isConnected) {
            return (
                <View style={styles.container}>

                    <View>
                        <ActionButton
                            title="Sauvegarder"
                            color="#FFDC32"
                            onPress={() => this.handleSubmit()}
                        />
                    </View>

                    <View style={styles.select}>
                        <MultiSelect 
                            items={allergens}
                            uniqueKey="_id"
                            autoFocusInput={false}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={selectedItems}
                            selectText="Allergies"
                            selectTextInfo="sélectionnée(s)"
                            searchInputPlaceholderText="Recherche..."
                            tagRemoveIconColor="#00C378"
                            tagBorderColor="#00C378"
                            tagTextColor="#00C378"
                            selectedItemTextColor="#00C378"
                            selectedItemIconColor="#00C378"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#CCC' }}
                            hideDropdown={true}
                            hideSubmitButton={true}
                            noResultText="Aucun résultat trouvé."
                            styleItemsContainer={{ height: 400 }}
                            textInputProps={{ autoFocus: false }}
                        />
                    </View>
                </View>
            );
        } else if (!isLoading && !isConnected) {
            return (
                <OupsScreen message="Pas de connexion internet"/>
            );
        }
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                {this._displayLoading()}
                {this._displayAllergies()}
            </View>
        )
    }
}

export default Allergies;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    select: {
        marginTop: 20,
    }
});