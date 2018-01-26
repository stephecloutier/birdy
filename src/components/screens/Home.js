import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Header from '../commons/Header';

import {logoutUser} from '../../actions/auth';

class Home extends Component {
    onButtonPress() {
        this.props.logoutUser();
    }
    render() {
        return(
            <View>
                <Text>
                    You are on the home page
                </Text>
                <Button
                    title='Logout'
                    onPress={this.onButtonPress.bind(this)}
                >
                </Button>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {logoutUser})(Home);

//export default Home;
