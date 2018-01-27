import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {getUserCaptures} from '../../actions/capture';

class UserCaptures extends Component {
    componentWillMount() {
        this.props.capture.isLoading = true
        if(this.props.auth.userId) {
            this.props.getUserCaptures(this.props.auth.userId)
        } else {
            this.props.getUserCaptures(this.props.register.userId)
        }
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
                </View>
            )
        }
        
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getUserCaptures})(UserCaptures);
