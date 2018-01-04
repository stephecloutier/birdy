import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';


class Header extends Component {
    render() {
        console.log(this.props);

        return (
            <View>
            <Button
                onPress={() => this.props.navigation.navigate('DrawerToggle')}
                title="="
            />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Header);

/*
const Header = (props) => {
    return(
        <View>
            <Button
                onPress={() => this.props.onDrawerPress()}
                title="="
            />
        </View>
    )
}

export default Header;
*/