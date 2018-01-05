/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';

import firebaseConfig from './settings';

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