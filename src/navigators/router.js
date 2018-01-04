import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';

import Login from '../components/screens/Login';
import Register from '../components/screens/Register';

export const SignedOut = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Authentification',
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: 'Inscription',
        },
    },
}, {
    initialRouteName: 'Login',
});

import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            /*
            tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="home" size={30} color={tintColor} />
            )*/
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            /*
            tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="user" size={30} color={tintColor} />
            )*/
        }
    }
});