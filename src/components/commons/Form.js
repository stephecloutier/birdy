import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './Field';

import * as actions from '../../actions/auth';

class Form extends Component {
    onButtonPress(){
        //this.props.logIn();
    }
    render() {
        return(
            <View>
                <Text>
                    {this.props.formText}
                </Text>
                <Field
                    label='Email'
                    placeholder='johndoe@birdy.be'
                    /*value={this.state.email}*/
                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    /*value={this.state.password}*/
                />
                <View>
                    <Button
                        title='Se connecter'
                        onPress={this.onButtonPress.bind(this)}>
                    </Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
    }
}

//export {Form};
export default connect(mapStateToProps, actions)(Form);
