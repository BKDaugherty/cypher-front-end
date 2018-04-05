import React from 'react'
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation'
//Constants for route names
import {MainApp, LoginScreen, SignUpScreen, AuthFlow} from '@Navigation/Routes'
//import AuthNav from '@Navigation/AuthNav'
import {connect} from 'react-redux'

/* Auth navigation */
import AuthPageContainer from '@Containers/AuthPageContainer.js'
import SignUpPageContainer from '@Containers/SignUpPageContainer.js'

import {addListener} from './reduxMiddleware'

const AuthNav = StackNavigator({
  [LoginScreen]: { screen: AuthPageContainer },
  [SignUpScreen]:{ screen: SignUpPageContainer},
})


/* Secure Navigation */

import SettingsPageContainer from '@Containers/SettingsPageContainer'

//Import Routes
import {BitcoinTab, 
		EthereumTab, 
		BitcoinCashTab, 
		PortfolioTab, 
		LitecoinTab} from '@Navigation/Routes'

import CustomTabBar from '@Components/CustomTabBar'

import {
	BitcoinContainer,
	EthereumContainer,
	BitcoinCashContainer,
	LitecoinContainer,
	} from '@Containers/CypherTabPage'


const SecureNavigatorOptions = {
	borderTopColor:'transparent',
	tabBarComponent:CustomTabBar,
	tabBarPosition:'bottom',
	swipeEnabled:true,
	animationEnabled:true,
	//Lazy should be true... But there seems to be a bug?
	//https://github.com/react-navigation/react-navigation/issues/1627
	//Setting to false causes the App to be synchronous and is not a good 
	//call!!!
	lazy:false,
}

const SecureNavigatorRoutes = {
	[PortfolioTab]:{screen:SettingsPageContainer}, 
	[BitcoinTab]: {screen:BitcoinContainer },
	[EthereumTab]: { screen:EthereumContainer  },
	[BitcoinCashTab]: { screen: BitcoinCashContainer },
	[LitecoinTab]: { screen: LitecoinContainer },
}

//The Navigator for the secure portion of our app
export const SecureNav = 
	TabNavigator(SecureNavigatorRoutes,SecureNavigatorOptions)

/* End Secure Navigation */

//Controls the main tabs of the app
export const RootNavigator = StackNavigator({
  [AuthFlow]:{screen:AuthNav},
  [MainApp]:{screen:SecureNav}
})

const RootNavigation = ({nav, dispatch}) => {
  return <RootNavigator
    navigation={addNavigationHelpers({dispatch, state:nav, addListener})}/>
}

const mapStateToProps = (state) => {
  return ({
      nav: state.nav 
  })
}
export default connect(mapStateToProps)(RootNavigation)

