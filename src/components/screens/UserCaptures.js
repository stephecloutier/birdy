import React, {Component} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback, Button} from 'react-native';
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
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.capture.selectedBird = singleBird.item
                        this.updateSelectedBird()
                    }}
                >
                    <View>
                        <Text>
                            {singleBird.item.latin_name + ' - ' + singleBird.item.bague}
                    </Text> 
                    </View>
                </TouchableWithoutFeedback>
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
                <View>
                    <Text>
                        Vos captures
                    </Text>
                    <FlatList 
                        data={this.props.capture.userBirds}
                        renderItem={this.renderBird.bind(this)}
                        keyExtractor={(bird, index) => index}
                        extraData={this.props}
                    />
                </View>
            )
        }
        
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getUserCaptures})(UserCaptures);
