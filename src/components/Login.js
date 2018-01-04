import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import LoginForm from './commons/LoginForm';
import Header from './commons/Header';


class Login extends Component {
    toRegister(){
        ;
    }

    render() {
        return(
            <View>
                <Header headerText={'Birdy'} />
                <LoginForm formText={'Authentification'} />
                <Button
                    title='Créer un compte'
                    onPress={this.toRegister.bind(this)}
                >
                </Button>
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
  