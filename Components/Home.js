
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';

class MyHomeScreen extends Component {
    render() {
        return (
            <View style = { styles.homeContainer }>
                <Text style={{fontSize: 23}}> Welcome </Text>
                <Text style={{fontSize: 10}}> Appareil photo pour scanner code bar puis vue produit poussée dans le StackNavigator </Text>
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