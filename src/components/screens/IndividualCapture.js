import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SegmentedControls } from 'react-native-radio-buttons'
import Field from '../commons/Field';
import Error from '../commons/Error';

import {saveBird} from '../../actions/capture';

class IndividualCapture extends Component {
    constructor(props) {
        super(props);
        this.bird = {
            session_id: this.props.capture.captureId,
            reprise: false,
            bague: '',
            latin_name: '',
            alaire: '',
            weight: '',
            fat: '',
            sex: '',
            age: '',
        }
    }

    saveBird() {
        const {goBack} = this.props.navigation;
        this.props.saveBird(this.bird, this.props.navigation)
    }

    setCaptureReprise(data) {
        if(data == 'Oui') this.bird.reprise = true
        if(data == 'Non') this.bird.reprise = false
    }

    setCaptureSex(data) {
        this.bird.sex = data
    }
    render() {
        const captureOptions = [
            'Oui',
            'Non'
        ]

        const sexOptions = [
            'M',
            'F'
        ]
        // pas eu encore le temps de gérer les reprises \\
        // <Text>S'agit-il d'une reprise&nbsp;?</Text>
        // <SegmentedControls
        // options={ captureOptions }
        // onSelection={ this.setCaptureReprise.bind(this) }
        // selectedOption={ this.bird.reprise }
        // />
        return(
            <View style={styles.container}>
                <Field 
                label='Numéro de bague'
                placeholder='123456'
                onChangeText={(text) => {
                    this.bird.bague = text;
                }}
                />

                <Field 
                label='Nom latin'
                placeholder='Birdus Birdus'
                onChangeText={(text) => {
                    this.bird.latin_name = text;
                }}
                />

                <Field 
                label='Longueur alaire (cm)'
                placeholder='20'
                onChangeText={(text) => {
                    this.bird.alaire = text;
                }}
                />

                <Field 
                label='Poids (g)'
                placeholder='300'
                onChangeText={(text) => {
                    this.bird.weight = text;
                }}
                />

                <Field 
                label='Indice de masse adipeuse (%)'
                placeholder='2'
                onChangeText={(text) => {
                    this.bird.fat = text;
                }}
                />

                <Text style={styles.label}>Sexe</Text>
                <SegmentedControls
                options={ sexOptions }
                onSelection={ this.setCaptureSex.bind(this) }
                selectedOption={ this.bird.sex }
                />

                <Field 
                label='Âge (années)'
                placeholder='4'
                onChangeText={(text) => {
                    this.bird.age = text;
                }}
                />

        
                <Button
                    title='Enregistrer'
                    onPress={this.saveBird.bind(this)} >
                </Button>

                <Error />
            </View>
        )
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

export default connect(mapStateToProps, {saveBird})(IndividualCapture);
