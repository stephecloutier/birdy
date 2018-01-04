import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './Field';
import Error from './Error';

import {loginUser} from '../../actions/auth';

class LoginForm extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {}; 
    }*/


    onButtonPress(){
        this.props.loginUser(this.props.auth.email, this.props.auth.password);
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
                    value={this.props.email}
                    onChangeText={(text) => {
                        this.props.auth.email = text;
                    }}

                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    value={this.props.password}
                    onChangeText={text => this.props.auth.password = text}
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
/*
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
*/

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {loginUser})(LoginForm);