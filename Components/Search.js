import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedText: "",
        }
    }

    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    _searchInfo() { //3103220025338
        this.props.navigation.navigate("Product", {barcode: this.state.searchedText});
    }

    render() {
        return (
            <View style = { styles.homeContainer }>
                <TextInput style={styles.textInput} placeholder='Code barre'
                           onChangeText={(text) => this._searchTextInputChanged(text)}/>
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._searchInfo()} />
            </View>
        );
    }
}

export default SearchScreen;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
    }
});