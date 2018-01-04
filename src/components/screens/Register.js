import React, {Component} from 'react';
import {View, Button} from 'react-native';
import RegisterForm from '../commons/RegisterForm';
import Header from '../commons/Header';


class Register extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Birdy'} />
                <RegisterForm />
            </View>
        )
    }
}

export default Register;