import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/screens/Login'
import Register from '../components/screens/Register'
import Home from '../components/screens/Home'
import Encyclopedia from '../components/screens/Encyclopedia'


// drawer stack
const DrawerStack = DrawerNavigator({
    Accueil: { screen: Home },
    Encyclopedia: { screen: Encyclopedia },
})


const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'hotpink'},
        title: 'Bienvenue [machin]',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>,
        gesturesEnabled: false
    })
})

// login stack
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
    navigationOptions: {
        headerStyle: {backgroundColor: '#E73536'},
        headerTintColor: 'white'
    }
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    LoginStack: { screen: LoginStack },
    DrawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'LoginStack'
})

export default PrimaryNav
