import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
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
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Bienvenue {this.props.user.first_name} {this.props.user.last_name} !
                </Text>
                <TouchableOpacity
                        onPress={this.navigateCapture}>
                        <Text style={styles.buttonText}>
                        Faire une nouvelle capture
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={this.navigateUserCaptures}>
                        <Text style={styles.buttonText}>
                        Voir toutes mes captures
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'stretch',
        fontSize: 20,
        backgroundColor: '#E4373C',
        marginBottom: 10
    },
});
  


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, )(Home);
