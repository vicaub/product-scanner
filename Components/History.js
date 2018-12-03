
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';

class HistoryScreen extends Component {
    render() {
        return (
            <View style = { styles.historyContainer }>
                <Text style={{fontSize: 23}}> History </Text>
            </View>
        );
    }
}

export default HistoryScreen;

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});