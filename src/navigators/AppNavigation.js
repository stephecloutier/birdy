import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/screens/Login'
import Register from '../components/screens/Register'
import Home from '../components/screens/Home'
import Encyclopedia from '../components/screens/Encyclopedia'
import DrawerContainer from '../components/DrawerContainer'


// DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
// drawer stack
const DrawerRoutes = {
    Accueil: { screen: Home },
    Encyclopédie: { screen: Encyclopedia }
};
const DrawerOptions = {
    contentComponent: DrawerContainer,
};

const TheDrawer = DrawerNavigator(DrawerRoutes, DrawerOptions)

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
        navigation.navigate('DrawerToggle')
    }
  }>Menu</Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: TheDrawer }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#E73536'},
    title: 'Welcome!',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
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
