import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Header from '../commons/Header';


class Home extends Component {
    navigateCapture = () => {
        const navigateToCapture = NavigationActions.navigate({
            routeName:'Capture',
        })

        this.props.navigation.dispatch(navigateToCapture);
    }

    navigateUserCaptures = () => {
        const navigateToUserCapture = NavigationActions.navigate({
            routeName:'UserCaptures',
        })

        this.props.navigation.dispatch(navigateToUserCapture);
    }

    componentWillMount() {
        console.log('Component will mount (home)')
    }

    render() {
        return(
            <View>
                <Text>
                    Bienvenue {this.props.user.first_name} {this.props.user.last_name} !
                </Text>
                <Button
                    title='Faire une nouvelle capture'
                    onPress={this.navigateCapture} >
                </Button>
                <Button
                    title='Voir toutes mes capture'
                    onPress={this.navigateUserCaptures} >
                </Button>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, )(Home);
