import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './commons/Field';
import Error from './commones/Error';


import {createUser} from '../../actions/register';

class RegisterForm extends Component {

    onButtonPress(){
        //this.props.loginUser(this.props.auth.email, this.props.auth.password);
    }

    render() {
        return(
            <View>
                <Text>
                    {this.props.formText}
                </Text>
                <Field 
                    label='#ISN'
                    placeholder='ZZ00WW'
                    value={this.props.isn}
                    onChangeText={(text) => {
                        this.props.register.isn = text;
                    }}
                />
                <Field 
                    label='Prénom'
                    placeholder='John'
                    value={this.props.firstName}
                    onChangeText={(text) => {
                        this.props.register.firstName = text;
                    }}
                />
                <Field 
                    label='Nom'
                    placeholder='Doe'
                    value={this.props.lastName}
                    onChangeText={(text) => {
                        this.props.register.lastName = text;
                    }}
                />
                <Field
                    label='Email'
                    placeholder='johndoe@birdy.be'
                    value={this.props.email}
                    onChangeText={(text) => {
                        this.props.register.email = text;
                    }}
                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    value={this.props.password}
                    onChangeText={text => this.props.register.password = text}
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