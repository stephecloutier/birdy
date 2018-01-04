import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

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

export const SignedIn = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
            /*
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./man-user.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),*/
        },
    },
    Profile: {
        screen: Profile,
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});