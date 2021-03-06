import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { SegmentedControls } from 'react-native-radio-buttons'
import Field from '../commons/Field';

import {updateBird} from '../../actions/capture';


class SingleBirdCapture extends Component {
    setCaptureSex(data) {
        this.props.capture.selectedBird.sex = data
    }

    updateBird() {
        this.props.updateBird(this.props.capture.selectedBird, this.props.navigation)
    }
    render() {
        const sexOptions = [
            'M',
            'F'
        ]
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Modification de {this.props.capture.selectedBird.latin_name} avec bague #{this.props.capture.selectedBird.bague}
                </Text>

                <Field 
                label='Numéro de bague'
                placeholder='123456'
                defaultValue={this.props.capture.selectedBird.bague}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.bague = text;
                }}
                />

                <Field 
                label='Nom latin'
                placeholder='Birdus Birdus'
                defaultValue={this.props.capture.selectedBird.latin_name}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.latin_name = text;
                }}
                />

                <Field 
                label='Longueur alaire (cm)'
                placeholder='20'
                defaultValue={this.props.capture.selectedBird.alaire}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.alaire = text;
                }}
                />

                <Field 
                label='Poids (g)'
                placeholder='300'
                defaultValue={this.props.capture.selectedBird.weight}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.weight = text;
                }}
                />

                <Field 
                label='Indice de masse adipeuse (%)'
                placeholder='2'
                defaultValue={this.props.capture.selectedBird.fat}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.fat = text;
                }}
                />

                <Text style={styles.label}>Sexe</Text>
                <SegmentedControls
                options={ sexOptions }
                onSelection={ this.setCaptureSex.bind(this) }
                selectedOption={ this.props.capture.selectedBird.sex }
                />

                <Field 
                label='Âge (années)'
                placeholder='4'
                defaultValue={this.props.capture.selectedBird.age}
                onChangeText={(text) => {
                    this.props.capture.selectedBird.age = text;
                }}
                />

        
                <Button
                    title='Enregistrer'
                    onPress={this.updateBird.bind(this)} >
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 18,
        marginTop: 8,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center'
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start'
    },

});

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {updateBird})(SingleBirdCapture);
