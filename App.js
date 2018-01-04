/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
//import {connect} from 'react-redux'
import * as firebase from 'firebase';

import firebaseConfig from './settings';
//import Login from './src/components/Login';
//import Home from './src/components/screens/Home';

import RootNavigator from './src/navigators/StackNavigator';

let firebaseApp;

class App extends Component {
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    
    render() {
        return <RootNavigator />;
    }
}

export default App;
