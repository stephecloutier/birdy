import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../commons/Header';


class Home extends Component {
    render() {
        return(
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="="
                />
                <Text>
                    You are on the home page
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Profile')}
                    title="Go to profile"
                />
            </View>
        )
    }
}

export default Home;
