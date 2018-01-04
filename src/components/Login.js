import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from './commons/LoginForm';
import Header from './commons/Header';


class Login extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Birdy'} />
                <LoginForm formText={'Authentification'} />
            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  