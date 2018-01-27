import React, {Component} from 'react';
import {View, Text, Button, FlatList } from 'react-native';
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
            lng: '',
            uid: this.props.auth.userId ? this.props.auth.userId : this.props.register.userId,
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
        const navigateToIndividualCapture = NavigationActions.navigate({
            routeName:'IndividualCapture',
            params:{name:'IndividualCapture'}
        })
        this.props.navigation.dispatch(navigateToIndividualCapture);
    }
    endCapture() {
        const navigate = NavigationActions.navigate({
            routeName:'DrawerStack',
        })
        this.props.capture.captureHasStarted = false
        this.props.navigation.dispatch(navigate);
    }

    setSelectedCaptureMethod(data) {
        this.capture.method = data
    }

    renderBird(singleBird) {
        return <Text>{singleBird.item.latin_name + ' - ' + singleBird.item.bague}</Text>
    }

    render() {
        const date = new Date(this.capture.date)
        const formattedDate = date.getDate() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + date.getFullYear()

        const captureOptions = [
            'Filet',
            'Nid'
        ]
        if(this.props.capture && this.props.capture.captureHasStarted) {
            return(
                <View>
                    <Text>Capture du {formattedDate} au {this.capture.method}</Text>
                    <Text>Oiseau(x) capturé(s)</Text>
                    <FlatList 
                        data={this.props.capture.birds}
                        renderItem={this.renderBird}
                        keyExtractor={(bird, index) => index}
                    />

                    <Button
                        title='Ajouter un oiseau'
                        onPress={this.continueCapture.bind(this)} >
                    </Button>
                    <Button
                        title='Terminer la capture'
                        onPress={this.endCapture.bind(this)} >
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