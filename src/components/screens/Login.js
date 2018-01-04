import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import LoginForm from '../commons/LoginForm';
import Header from '../commons/Header';


class Login extends Component {
    navigate = () => {
        const navigateToRegister = NavigationActions.navigate({
            routeName:'Register',
            params:{name:'Register'}
        })

        this.props.navigation.dispatch(navigateToRegister);
    }

    navigateLogin = () => {
        const navigateToLogin = NavigationActions.navigate({
            routeName:'DrawerStack',
        })

        this.props.navigation.dispatch(navigateToLogin);

    }
    render() {
        return(
            <View style={styles.container}>
                <LoginForm />
                <Button
                    title='Pretend you log in'
                    onPress={this.navigateLogin}
                >
                </Button>
                <Button
                    title='Créer un compte'
                    onPress={this.navigate}
                >
                </Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  
export default Login;

  /*

  const mapStateToProps = state => ({
    state
  });
  
 
  const LoginScreen = connect(mapStateToProps)(Login);
  
  export default LoginScreen;
  */