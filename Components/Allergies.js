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

let items = [{
    id: 'lol',
    name: 'Troll'
  }, {
    id: 'en:milk',
    name: 'Lait',
  }, {
    id: 'en:gluten',
    name: 'Gluten',
  }, {
    id: 'en:eggs',
    name: 'Œufs',
  }, {
    id: 'en:soybeans',
    name: 'Soja',
  }, {
    id: 'en:nuts',
    name: 'Fruits à coque',
  }, {
    id: 'en:fish',
    name: 'Poisson',
  }, {
    id: 'en:mustard',
    name: 'Moutarde',
  }, {
    id: 'en:celery',
    name: 'Céleri',
  }, {
    id: 'en:sesame-seeds1',
    name: 'Graines de sésame',
  }, {
    id: 'en:sesame-seeds2',
    name: 'Graines de sésame',
  }, {
    id: 'en:sesame-seeds3',
    name: 'Graines de sésame',
  }, {
    id: 'en:sesame-seeds4',
    name: 'Graines de sésame',
  }, {
    id: 'en:sesame-seeds5',
    name: 'Graines de sésame',
  }, {
    id: 'en:sesame-seeds6',
    name: 'Graines de sésame 6',
  }, {
    id: 'en:sesame-seeds7',
    name: 'Graines de sésame 7',
  }, {
    id: 'en:sesame-seeds8',
    name: 'Graines de sésame 8',
  }];

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
                            // fixedHeight // => scroll and submit issues
                            autoFocusInput={false}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={selectedItems}
                            selectText="Allergies"
                            searchInputPlaceholderText="Recherche..."
                            tagRemoveIconColor="#00C378"
                            tagBorderColor="#00C378"
                            tagTextColor="#00C378"
                            selectedItemTextColor="#00C378"
                            selectedItemIconColor="#00C378"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#CCC' }}
                            submitButtonColor="#CCC"
                            submitButtonText="Valider"
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
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
});