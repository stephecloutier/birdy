import React, {Component} from 'react';
import {View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SegmentedControls } from 'react-native-radio-buttons';
import {connect} from 'react-redux';
import Field from '../commons/Field';
import Error from '../commons/Error';

import {startCapture} from '../../actions/capture';


class Capture extends Component {
    constructor(props) {
        super(props);
        this.capture = {
            date: '',
            method: '',
            lat: '',
            lng: ''
        }
    }
    componentWillUnmount() {
        this.props.capture.captureHasStarted = false
    }
    startCapture() {
        this.capture.date = Date.now()
        this.props.startCapture(this.capture)
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
        this.capture.method = data
    }

    render() {
        const date = new Date(this.capture.date)
        const formattedDate = date.getDate() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + date.getFullYear()

        console.log(formattedDate)
        const captureOptions = [
            'Filet',
            'Nid'
        ]
        if(this.props.capture && this.props.capture.captureHasStarted) {
            return(
                <View>
                    <Text>Capture du {formattedDate} au {this.capture.method}</Text>
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
                    selectedOption={ this.capture.method }
                    />
                    <Field 
                        label='Latitude'
                        placeholder='50.6502003'
                        onChangeText={(text) => {
                            this.capture.lat = text;
                        }}
                    />
                    <Field 
                        label='Longitude'
                        placeholder='5.5588253'
                        onChangeText={(text) => {
                            this.capture.lng = text;
                        }}
                    />

                    <Button
                        title='Débuter la capture'
                        onPress={this.startCapture.bind(this)} >
                    </Button>

                    <Error />
                </View>
            )
        }
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {startCapture})(Capture);