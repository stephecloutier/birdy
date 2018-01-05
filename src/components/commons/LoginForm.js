import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './Field';
import Error from './Error';

import {loginUser} from '../../actions/auth';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.user = {
            email: '',
            password: '',
        }
    }

    onButtonPress(){
        this.props.loginUser(this.user.email, this.user.password);
    }

    render() {
        return(
            <View>
                <Field
                    label='Email'
                    placeholder='johndoe@birdy.be'
                    onChangeText={(text) => {
                        this.user.email = text;
                    }}

                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    onChangeText={text => this.user.password = text}
                />
                <View>
                    <Button
                        title='Se connecter'
                        onPress={this.onButtonPress.bind(this)}>
                    </Button>
                </View>
                <Error />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {loginUser})(LoginForm);