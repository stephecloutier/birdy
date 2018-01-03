import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {Field} from './Field';

class Form extends Component {
    render() {
        return(
            <View>
                <Text> Authentification </Text>
                <Field
                    label='Email'
                    placeholder='johndoe@birdy.be'
                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    placeholder='motdepasse'
                />
                <View>
                    <Button
                        title='Se connecter'>
                    </Button>
                </View>
            </View>
        )
    }
}

export {Form};
