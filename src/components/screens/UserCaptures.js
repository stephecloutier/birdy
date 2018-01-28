import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Field from '../commons/Field';

import {getUserCaptures} from '../../actions/capture';
import SingleBirdCapture from './SingleBirdCapture';

class UserCaptures extends Component {
    constructor(props) {
        super(props);
        this.bird = {
            bague: '',
            latin_name: '',
            alaire: '',
            weight: '',
            fat: '',
            sex: '',
            age: '',
        }
    }
    componentWillMount() {
        this.props.capture.isLoading = true
        this.props.capture.selectedBird = {}
        if(this.props.auth.userId) {
            this.props.getUserCaptures(this.props.auth.userId)
        } else {
            this.props.getUserCaptures(this.props.register.userId)
        }
    }
    
    updateSelectedBird() {
        const navigateToIndividualBird = NavigationActions.navigate({
            routeName:'SingleBirdCapture',
        })
        this.props.navigation.dispatch(navigateToIndividualBird);
    }

    renderBird(singleBird) {          
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.capture.selectedBird = singleBird.item
                        this.updateSelectedBird()
                    }}
                >
                    <View style={styles.listItem}>
                        <Text>
                            {singleBird.item.latin_name + ' - ' + singleBird.item.bague}
                    </Text> 
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        if(this.props.capture.isLoading) {
            return(
                <View>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        } else {
            return(
                <ScrollView  style={styles.container}>
                    <Text style={styles.title}>
                        Vos captures (cliquez sur un oiseau pour le modifier)
                    </Text>
                    <FlatList 
                        data={this.props.capture.userBirds}
                        renderItem={this.renderBird.bind(this)}
                        keyExtractor={(bird, index) => index}
                        extraData={this.props}
                    />
                </ScrollView>
            )
        }
        
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
    listItem: {
        marginBottom: 5,
    },
});


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getUserCaptures})(UserCaptures);
