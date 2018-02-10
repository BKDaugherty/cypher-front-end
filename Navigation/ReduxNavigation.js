import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from '@Navigation/AppNavigation'

import { createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

import {addListener} from '@Navigation/reduxMiddleware'


const ReduxNavigation = (props) => {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
