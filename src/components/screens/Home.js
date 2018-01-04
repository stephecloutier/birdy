import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Login from './Login';
import Welcome from './Welcome';
import { NavigationActions } from 'react-navigation';


const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home'})
    ]
  })


class Home extends Component {
    componentWillUpdate() {
        // this.props.navigation.dispatch(resetAction);
        
   
    }
    render() {
        if(this.props.isLoggedIn) {
            return (
                <View>
                    {this.props.navigation.navigate('Welcome')}
                </View>
            )
        } else {
           return (
               <View>
                    {this.props.navigation.navigate('Login')}
               </View>
           )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Home);

//export default Home;