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

import LoginStack from './src/navigators/LoginStack';
import {SignedInNav} from './src/navigators/SignedInNav';
import ReduxNavigation from './src/navigators/ReduxNav';

let firebaseApp;

class App extends Component {
 
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }
 
    render() {
        if(this.props.isLoggedIn) {
            return <SignedInNav />;
        } else {
            return <ReduxNavigation />;
        }
        
    }
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(App);
