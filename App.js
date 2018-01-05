/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {isSignedIn} from './src/actions/auth';

import firebaseConfig from './settings';

import {SignedInNav} from './src/navigators/SignedInNav';
import ReduxNavigation from './src/navigators/ReduxNav';

let firebaseApp;

class App extends Component {
 
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }
 
    render() {
        return <ReduxNavigation />; 
    }
}

export default App;