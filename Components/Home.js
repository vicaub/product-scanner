
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Button } from 'react-native';

class MyHomeScreen extends Component {

    _displayProductInfo = () => {
        this.props.navigation.navigate("Product");
    };

    render() {
        return (
            <View style = { styles.homeContainer }>
                <Text style={{fontSize: 23}}> Welcome </Text>
                <Text style={{fontSize: 10}}> Appareil photo pour scanner code bar puis vue produit poussée dans le StackNavigator </Text>
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._displayProductInfo()} />
            </View>
        );
    }
}

export default MyHomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});