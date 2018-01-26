import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Header from '../commons/Header';


class Home extends Component {
    navigate = () => {
        const navigateToCapture = NavigationActions.navigate({
            routeName:'Capture',
            params:{name:'Capture'}
        })

        this.props.navigation.dispatch(navigateToCapture);
    }

    render() {
        return(
            <View>
                <Text>
                    Bienvenue {this.props.user.first_name} {this.props.user.last_name} !
                </Text>
                <Button
                    title='Faire une nouvelle capture'
                    onPress={this.navigate} >
                </Button>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, )(Home);
