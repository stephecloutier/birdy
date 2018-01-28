import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/screens/Login'
import Register from '../components/screens/Register'
import Home from '../components/screens/Home'
import Encyclopedia from '../components/screens/Encyclopedia'
import Bird from '../components/screens/Bird'
import Capture from '../components/screens/Capture'
import IndividualCapture from '../components/screens/IndividualCapture'
import UserCaptures from '../components/screens/UserCaptures'
import SingleBirdCapture from '../components/screens/SingleBirdCapture'
import DrawerContainer from '../components/DrawerContainer'


// Capture stack
const CaptureStack = StackNavigator({
    CaptureInitialization: { 
        screen: Capture,
        routeName: 'CaptureInitialization',
        navigationOptions: {
            headerTitle: 'Informations génériques',
        },
    },
    IndividualCapture: { 
        screen: IndividualCapture,
        routeName: 'IndividualCapture',
        navigationOptions: {
            headerTitle: 'Informations sur l\'oiseau',
        },
    }
}, {
    initialRouteName: 'CaptureInitialization',
    navigationOptions: {
        headerStyle: {
            marginTop: -15,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
        },
        headerTintColor: '#E73536',
        headerBackTitle: ' ',
    }
});

// Encyclopedia stack
const EncyclopediaStack = StackNavigator({
    Encyclopedia: { 
        screen: Encyclopedia,
        routeName: 'Encyclopedia',
        navigationOptions: {
            headerTitle: 'Tous les oiseaux',
        },
    },
    Bird: { 
        screen: Bird,
        routeName: 'Bird',
        navigationOptions: ({navigation}) => ({
            headerTitle: `${navigation.state.params.title}`,
        })
    }
}, {
    initialRouteName: 'Encyclopedia',
    navigationOptions: {
        headerStyle: {
            marginTop: -15,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
        },
        headerTintColor: '#E73536',
        headerBackTitle: ' ',
    }
});



// drawer stack
const DrawerRoutes = {
    Accueil: { screen: Home, routeName: 'Home' },
    Encyclopédie: { 
        screen: EncyclopediaStack, 
        navigationOptions: {
            headerTitle: 'Encyclopédie',
        }, 
    },
    UserCaptures: { 
        screen: UserCaptures, 
        routeName: 'UserCaptures',
        navigationOptions: {
            headerTitle: 'Vos captures',
        },
    },
    SingleBirdCapture: { 
        screen: SingleBirdCapture, 
        routeName: 'SingleBirdCapture',
    },
    Capture: { 
        screen: CaptureStack,
        navigationOptions: {
            headerTitle: 'Capture',
        },
    }
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
    title: 'Birdy',
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
