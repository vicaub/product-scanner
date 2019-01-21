'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { getAllergensFromApi } from '../API/OFFApi';
import ActionButton from './Common/ActionButton';
import UserService from "../Services/UserService";

class Allergies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            allergens: [],
            isLoading: true,
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
        });
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
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayAllergies() {
        const { selectedItems, allergens, isLoading } = this.state;
        if (!isLoading) {
            return (
                <View style={styles.container}>
                    <View>
                        <MultiSelect 
                            items={allergens}
                            uniqueKey="_id"
                            hideDropdown={true}
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
                            hideSubmitButton={true}
                            noResultText="Aucun résultat trouvé."
                            styleItemsContainer={{ height: 400 }}
                            // styleMainWrapper={{ position: "absolute", top: 30 }}
                            textInputProps={{ autoFocus: false }}
                        />
                    </View>
                    <View style={styles.bottomView}>
                        <ActionButton 
                            title="Sauvegarder"
                            color="#FFDC32"
                            onPress={() => this.handleSubmit()}
                        />
                    </View>
                </View>
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
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 80,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        marginTop: 50,
    },
});