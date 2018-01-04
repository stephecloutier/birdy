import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
// import getInitialRoute from '../actions/navigator';

import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Home from '../components/screens/Home';
import Welcome from '../components/screens/Welcome';

//let initialRoute = 'Login';

/*
if(state.isLoggedIn) {
    initialRoute = 'Home'
} 
*/


const RootNavigator = StackNavigator({
    Home: {
        screen: Welcome,
        navigationOptions: {
            headerTitle: 'Birdy',
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: 'Register',
        },
    },
}, {
    initialRouteName: 'Login',
});


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(RootNavigator);
//export default RootNavigator;