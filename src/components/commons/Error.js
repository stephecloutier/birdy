import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

class Error extends Component {
    renderError(singleError){
        return <Text>{singleError.item}</Text>
    };

        
    render() {
        if(this.props.auth.error) {
            return (
                <Text>
                    {this.props.auth.error.message}
                </Text>
            );
        } else if(this.props.register.error) {
            return (
                <Text>
                    {this.props.register.error.message}
                </Text>
            );
        } else if(this.props.register.errorList) {
            return (
                <FlatList
                    data={this.props.register.errorList}
                    renderItem={this.renderError}
                    keyExtractor={(item, index) => index}
                />
            );
        } else {
            return <View></View>;
        }
    }
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Error);
