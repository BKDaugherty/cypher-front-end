import React from 'react'
import {connect} from 'react-redux'
import ActionTypes from "@Actions/ActionTypes"
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text} from 'react-native'
import {APPDARKGRAY, WEBDARKBLUE, WEBLIGHTBLUE, WEBPINK} from "@Style/constants"
import {AboutScreen, AuthScreen, ManageScreen, SettingsScreen, PortfolioTab } from '@Navigation/Routes'
import { CypherText, DrawerSlot } from '@Style/BaseComponents';
import Button from '@Components/Button'

import {NavigationActions} from 'react-navigation'

const customDrawer = (props) => {
    return (
        <SafeAreaView style={{display:"flex", flex:1, flexDirection:"column", alignItems:"stretch", justifyContent:"center", backgroundColor:APPDARKGRAY}}>
			<DrawerSlot onPress={() => props.navigation.navigate(PortfolioTab)} color={APPDARKGRAY}>
				<CypherText center>{props.username}</CypherText>
				<CypherText center>${props.balance}</CypherText>
				<Button onPress={() =>{ 
					props.logout()
					const resetAction = NavigationActions.reset({index:0, actions:[props.navigation.navigate(AuthScreen)]})
					props.navigation.dispatch(resetAction)
				}}>
					<CypherText>Logout</CypherText>
				</Button>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(ManageScreen)} color={WEBLIGHTBLUE}>
				<CypherText header center>Manage</CypherText>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(SettingsScreen)} color={WEBDARKBLUE}>
				<CypherText header center>Settings</CypherText>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(AboutScreen)} color={WEBPINK}>
				<CypherText header center>About</CypherText>
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