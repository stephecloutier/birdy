import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './Field';
import Error from './Error';


import {createUser} from '../../actions/register';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.user = {
            isn: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }
    }

    onButtonPress(){
        this.props.createUser(this.user);
    }

    render() {
        return(
            <View>
                <Field 
                    label='#ISN'
                    placeholder='ZZ00WW'
                    onChangeText={(text) => {
                        this.user.isn = text;
                    }}
                />
                <Field 
                    label='Prénom'
                    placeholder='John'
                    onChangeText={(text) => {
                        this.user.first_name = text;
                    }}
                />
                <Field 
                    label='Nom'
                    placeholder='Doe'
                    onChangeText={(text) => {
                        this.user.last_name = text;
                    }}
                />
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
                        title='Créer mon compte'
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

export default connect(mapStateToProps, {createUser})(RegisterForm);