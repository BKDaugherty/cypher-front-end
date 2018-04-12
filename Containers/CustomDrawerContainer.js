import React from 'react'
import {connect} from 'react-redux'
import ActionTypes from "@Actions/ActionTypes"
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text} from 'react-native'
import {APPDARKGRAY, WEBDARKBLUE, WEBLIGHTBLUE, WEBPINK} from "@Style/constants"
import {AuthScreen, SettingsScreen, PortfolioTab } from '@Navigation/Routes'
import { CypherText } from '@Style/BaseComponents';

import {NavigationActions} from 'react-navigation'

const DrawerSlot = (props) => (
	<TouchableOpacity onPress={props.onPress}
	style={{
		backgroundColor:props.color,
		display:"flex",
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}}
	>{props.children}</TouchableOpacity>
	)



const customDrawer = (props) => {


    return (
        <SafeAreaView style={{display:"flex", flex:1, flexDirection:"column", alignItems:"stretch", justifyContent:"center", backgroundColor:APPDARKGRAY}}>
                <DrawerSlot onPress={() => props.navigation.navigate(PortfolioTab)} color={APPDARKGRAY}>
                    <CypherText>{props.username}</CypherText>
					<CypherText>${props.balance}</CypherText>
                </DrawerSlot>
                <DrawerSlot onPress={() => props.navigation.navigate(AuthScreen)} color={WEBLIGHTBLUE}>
					<CypherText>About</CypherText>
				</DrawerSlot>
                <DrawerSlot onPress={() => props.navigation.navigate(SettingsScreen)} color={WEBDARKBLUE}>
					<CypherText>Settings</CypherText>
				</DrawerSlot>
                <DrawerSlot onPress={() => {					
					props.logout()
					const resetAction = NavigationActions.reset({index:0, actions:[props.navigation.navigate(AuthScreen)]})
					props.navigation.dispatch(resetAction)
				}
				} color={WEBPINK}>
					<CypherText>Logout</CypherText>
				</DrawerSlot>
        </SafeAreaView>
        
    )
}
const customDrawerMap = (state, ownProps) => ({
	username:state.auth.username,
	balance:state.balance.balances.usd
})

const dispatchMap = (dispatch) => ({
	logout:() => dispatch({type:ActionTypes.LOGOUT})
})

const customDrawerContainer = connect(customDrawerMap, dispatchMap)(customDrawer)
export default customDrawerContainer