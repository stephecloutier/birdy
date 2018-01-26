import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import {connect} from 'react-redux';
import {logoutUser} from '../actions/auth';

class DrawerContainer extends React.Component {
    onButtonPress() {
        this.props.logoutUser()
    }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('Accueil')}
          style={styles.drawerItem}>
          Accueil
        </Text>
        <Text
          onPress={() => navigation.navigate('Encyclopédie')}
          style={styles.drawerItem}>
          Encyclopédie
        </Text>
        <Text
          onPress={this.onButtonPress.bind(this)}
          style={styles.drawerItem}>
          Déconnexion
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingTop: 40,
      paddingHorizontal: 20
    },
    drawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#E73536',
      padding: 10,
      marginBottom: 5,
      textAlign: 'left'
    }
  })

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {logoutUser})(DrawerContainer);