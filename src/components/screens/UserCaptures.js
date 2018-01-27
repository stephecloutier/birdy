import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class UserCaptures extends Component {
    render() {
        return(
            <View>
                <Text>
                    Vos captures
                </Text>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, )(UserCaptures);
