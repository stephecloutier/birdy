import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from './commons/Form';
import Header from './commons/Header';


class Login extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Birdy'} />
                <Form />
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
  