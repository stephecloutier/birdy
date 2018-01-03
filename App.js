/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as firebase from 'firebase';

import { firebaseConfig } from './settings';
import Login from './src/components/Login';

let firebaseApp;

class App extends Component {
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    
    render() {
        if (this.props.isLoggedIn) {
            console.log('Tu est connecté bravo');
        } else {
            return <Login />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.Auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(App);
