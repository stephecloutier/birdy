import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Header from '../commons/Header';


class Home extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <View>
                <Text>
                    Bienvenue {this.props.user.first_name} {this.props.user.last_name} !
                </Text>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, )(Home);
