import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
            <View style={styles.form}>
                <Field
                    style={styles.form}
                    label='Email'
                    placeholder='johndoe@birdy.be'
                    onChangeText={(text) => {
                        this.user.email = text;
                    }}

                />
                <Field
                    style={styles.form}
                    secureTextEntry
                    label='Mot de passe'
                    onChangeText={text => this.user.password = text}
                />
                <View>
                    <TouchableOpacity
                        onPress={this.onButtonPress.bind(this)}>
                        <Text style={styles.buttonText}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                </View>
                <Error />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
      margin: 10
    },
    buttonText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        backgroundColor: '#E4373C'
    }
});
  

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {loginUser})(LoginForm);