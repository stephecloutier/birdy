import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';

export const SignedInNav = DrawerNavigator({
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