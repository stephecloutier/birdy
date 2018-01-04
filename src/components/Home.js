import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './commons/Header';


class Home extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Birdy'} />
                <Text>Tu es connecté!</Text>
            </View>
        )
    }
}

export default Home;