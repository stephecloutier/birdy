import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav, isLoggedIn } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })
  /*
  if(isLoggedIn) {
    return <AppNavigation navigation={navigation} />
  }*/
  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)