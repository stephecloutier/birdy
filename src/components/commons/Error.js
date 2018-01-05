import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';


class Error extends Component {
    render() {
        console.log(this.props)
        if(this.props.auth.error) {
            return (
                <Text>
                    {this.props.auth.error.message}
                </Text>
            )
        } else if(this.props.register.error) {
            return (
                <Text>
                    {this.props.register.error.message}
                </Text>
            )
        } else {
            return <View></View>;
        }
        
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Error);
