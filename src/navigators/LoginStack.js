import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/screens/Login';
import Register from '../components/screens/Register';

const LoginStack = StackNavigator({
    Login: {
        screen: Login,
        routeName: 'Login',
        navigationOptions: {
            headerTitle: 'Authentification',
        },
    },
    Register: {
        screen: Register,
        routeName: 'Register',
        navigationOptions: {
            headerTitle: 'Inscription',
        },
    },
}, {
    initialRouteName: 'Login',
});

export default LoginStack;
