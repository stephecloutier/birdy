import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

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
      margin: 5,
      textAlign: 'left'
    }
  })