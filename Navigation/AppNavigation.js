
import React from 'react'
import {StatusBar, SafeAreaView, Text, View, TextInput, TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native'
import {addNavigationHelpers, DrawerItems, StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'
import * as Routes from './Routes'
import CustomTabBar from '@Components/CustomTabBar'
import {APPDARKGRAY, WEBLIGHTBLUE, WEBDARKBLUE, WEBPINK } from '@Style/constants'

import {connect} from 'react-redux'

import customDrawerContainer from '@Containers/CustomDrawerContainer'

//Import custom screens

const AppNavigationConfig = {
    headerMode:"none",
    navigationOptions:{
        gesturesEnabled:false,
    }
}

const AuthFlowConfig = {
    navigationOptions:{
        headerStyle:{
            backgroundColor:APPDARKGRAY,
            borderBottomWidth:0,
            borderRightWidth:0,
            
        },
        headerBackTitle:"Back",
        headerBackTitleStyle:{
            color:'#fff'
        }

    }
}

const MainFlowConfig = {
    headerMode:"none",
}

const MainDrawerConfig = {
    navigationOptions:{
        gesturesEnabled:true
    },
    contentComponent:customDrawerContainer,
}

const MainTabsConfig = {
	tabBarComponent:CustomTabBar,
	tabBarPosition:'bottom',
	swipeEnabled:true,
	animationEnabled:true,
	lazy:false,
}

import AuthPageContainer from '@Containers/AuthPageContainer'
import SignUpPageContainer from '@Containers/SignUpPageContainer'
import LoginPageContainer from '@Containers/LoginPageContainer'
import PortfolioPageContainer from '@Containers/PortfolioPageContainer'
import SplashScreen from '@Containers/SplashScreen'
import SettingsPageContainer from '@Containers/SettingsPageContainer'

import {
	BitcoinContainer,
	EthereumContainer,
	BitcoinCashContainer,
	LitecoinContainer,
    } from '@Containers/CypherTabPage'

export const AppNavigator = StackNavigator({
    [Routes.AuthFlow]:{
        screen:StackNavigator({
            // [Routes.SplashScreen]:{
            //     screen:SplashScreen,
            //     navigationOptions:{
            //         headerMode:"none"
            //     }
            // },
            [Routes.AuthScreen]:{screen:AuthPageContainer},
            [Routes.LoginScreen]:{screen:LoginPageContainer},
            [Routes.SignUpScreen]:{screen:SignUpPageContainer}
        },AuthFlowConfig)
    },
    [Routes.MainFlow]:{
        screen:DrawerNavigator({
            [Routes.MainApp]:{
                screen:TabNavigator({
                    [Routes.PortfolioTab]:{screen:PortfolioPageContainer}, 
                    [Routes.BitcoinTab]: {screen:BitcoinContainer },
                    [Routes.EthereumTab]: { screen:EthereumContainer  },
                    [Routes.BitcoinCashTab]: { screen: BitcoinCashContainer },
                    [Routes.LitecoinTab]: { screen: LitecoinContainer },
                }, MainTabsConfig)
            },
            [Routes.SettingsScreen]:{
                screen:SettingsPageContainer
            }
        }, MainDrawerConfig)
    }
},AppNavigationConfig)


import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
  
  // Configure listener
  const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigation, // <-- make sure this is where your nav lives (i.e. if your reducer is at state.nav use that instead)
  );

  const addListener = createReduxBoundAddListener("root");

const AppNavigationContainer = (props) => 
    (
        <AppNavigator navigation={addNavigationHelpers({
                dispatch: props.dispatch,
                state: props.navigation,
                addListener
              })}/>
    )


const mapStateToProps = state => ({
    navigation: state.navigation,
  })
  
export const AppNavigation = connect(mapStateToProps)(AppNavigationContainer)