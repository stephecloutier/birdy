import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SegmentedControls } from 'react-native-radio-buttons';
import {connect} from 'react-redux';

import {startCapture} from '../../actions/capture';


class Capture extends Component {
    constructor(props) {
        super(props);
        this.capture = {
            captureHasStarted: false,
        }
    }
    startCapture() {
        this.capture.captureHasStarted = true
        this.props.startCapture()
    }
    continueCapture() {
        this.props.startCapture()
    }
    endCapture = () => {
        const navigateToHome = NavigationActions.navigate({
            routeName:'Home',
            params:{name:'Home'}
        })
        this.props.navigation.dispatch(navigateToHome);
    }

    setSelectedCaptureMethod(data) {
        this.props.method = data
    }

    // setCaptureDate(newDate) {
    //     console.log(newDate)
    //     this.props.date = newDate
    // }

    render() {
        const captureOptions = [
            'Filet',
            'Nid'
        ]
        if(this.capture.captureHasStarted) {
            return(
                <View>
                    <Text>Oiseau(x) capturé(s)</Text>

                    <Button
                        title='Ajouter un oiseau'
                        onPress={this.continueCapture.bind(this)} >
                    </Button>
                    <Button
                        title='Terminer la capture'
                        onPress={this.endCapture} >
                    </Button>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Méthode de capture</Text>
                    <SegmentedControls
                    options={ captureOptions }
                    onSelection={ this.setSelectedCaptureMethod.bind(this) }
                    selectedOption={ this.props.method }
                    />
    
                    <Text>Date de capture</Text>
            
                    <Button
                        title='Débuter la capture'
                        onPress={this.startCapture.bind(this)} >
                    </Button>
                </View>
            )
        }
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {startCapture})(Capture);