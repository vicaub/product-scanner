'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';


class Allergies extends Component {

    constructor(props) {
        super(props);
        console.log(props.navigation.getParam('userId'));
        this.state = {
            selectedItems: [],
        };
        this.items = [{
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
            id: 'en:sesame-seeds',
            name: 'Graines de sésame',
          }];
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    handleSubmit() {
        console.log(this.state.selectedItems);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <MultiSelect 
                        hideTags
                        items={this.items}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedItems}
                        selectText="Allergies"
                        searchInputPlaceholderText="Recherche..."
                        onChangeInput={(text) => console.log(text)}
                        altFontFamily="ProximaNova-Light"
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
                    <View>
                        {this.multiSelect ? 
                            this.multiSelect.getSelectedItemsExt(this.state.selectedItems)
                            : <Text></Text>
                        }
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Button 
                        style={styles.button}
                        title="Sauvegarder"
                        color="#FFDC32"
                        onPress={() => this.handleSubmit()}
                    />
                </View>
            </View>
        )
    }
}

export default Allergies;

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
    button: {
        position: 'absolute',
        bottom: 0
    }
});