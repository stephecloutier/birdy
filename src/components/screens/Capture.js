import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Field from '../commons/Field';


class Capture extends Component {
    navigate = () => {
        const navigateToIndividualCapture = NavigationActions.navigate({
            routeName:'IndividualCapture',
            params:{name:'IndividualCapture'}
        })

        this.props.navigation.dispatch(navigateToIndividualCapture);
    }

    render() {
        return(
            <View>
                <Button
                    title='Suite'
                    onPress={this.navigate} >
                </Button>
            </View>
        )
    }
}

export default Capture;
