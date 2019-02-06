/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Navigator from './Navigation/Navigation';
import { fillDB, deleteDB } from './Database/prefillDB';


export default class App extends Component {

    componentDidMount() {
        // uncomment the following line to prefill basket and product database
        // fillDB();
        // deleteDB();
    }

    render() {
        return (
            <Navigator />
        );
    }
}