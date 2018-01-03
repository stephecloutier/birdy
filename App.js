/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Text, View} from 'react-native';
import * as firebase from 'firebase';

import { firebaseConfig } from './settings';
import Login from './src/components/Login';

let firebaseApp;

class App extends Component {
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Login />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state
        //isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(App);
