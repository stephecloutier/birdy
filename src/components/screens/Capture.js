import React, {Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
        this.props.capture.birds = []
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
        return <Text style={styles.listItem}>{singleBird.item.latin_name + ' - ' + singleBird.item.bague}</Text>
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
                <View style={styles.container}>
                    <Text style={styles.title}>Capture du {formattedDate} au {this.capture.method}</Text>
                    <Text style={styles.label}>Oiseau(x) capturé(s)</Text>
                    <FlatList 
                        data={this.props.capture.birds}
                        renderItem={this.renderBird}
                        keyExtractor={(bird, index) => index}
                    />

                    <TouchableOpacity
                        onPress={this.continueCapture.bind(this)}>
                        <Text style={styles.buttonText}>
                            Ajouter un oiseau
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.endCapture.bind(this)}>
                        <Text style={styles.buttonText}>
                            Terminer la capture
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.label}>Méthode de capture</Text>
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

                    <TouchableOpacity
                        onPress={this.startCapture.bind(this)}>
                        <Text style={styles.buttonText}>
                            Débuter la capture
                        </Text>
                    </TouchableOpacity>

                    <Error />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 18,
        marginTop: 8,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center'
    },
    listItem: {
        marginBottom: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        backgroundColor: '#E4373C',
        marginTop: 10,
    },
  });

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {startCapture})(Capture);