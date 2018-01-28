import React, {Component} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
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

    render() {
        return(
            <View style={styles.container}>
                <LoginForm style={styles.item} />
                <TouchableOpacity
                        onPress={this.navigate}>
                        <Text style={styles.buttonText}>
                            Créer un compte
                        </Text>
                </TouchableOpacity>
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
    item: {
        alignSelf: 'stretch',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        backgroundColor: '#E4373C'
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