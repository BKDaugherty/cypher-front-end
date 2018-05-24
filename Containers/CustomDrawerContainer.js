import React from 'react'
import {connect} from 'react-redux'
import ActionTypes from "@Actions/ActionTypes"
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text} from 'react-native'
import {APPDARKGRAY, WEBDARKBLUE, WEBLIGHTBLUE, WEBPINK} from "@Style/constants"
import {AboutScreen, AuthScreen, ManageScreen, SettingsScreen, PortfolioTab } from '@Navigation/Routes'
import { CypherText, DrawerSlot } from '@Style/BaseComponents';
import Button from '@Components/Button'
import AppLogo from '@Components/AppLogo'

import {NavigationActions} from 'react-navigation'

const customDrawer = (props) => {
    return (
        <SafeAreaView style={{display:"flex", flex:1, flexDirection:"column", alignItems:"stretch", justifyContent:"center", backgroundColor:APPDARKGRAY}}>
			<DrawerSlot onPress={() => props.navigation.navigate(PortfolioTab)} color={APPDARKGRAY}>
				<AppLogo style={{width:40, height:40}}/>
				<CypherText center bold>{`${props.first_name} ${props.last_name}`}</CypherText>
				<Button onPress={() =>{ 
					props.logout()
					const resetAction = NavigationActions.reset({index:0, actions:[props.navigation.navigate(AuthScreen)]})
					props.navigation.dispatch(resetAction)
				}}>
					<CypherText>Logout</CypherText>
				</Button>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(ManageScreen)} color={WEBLIGHTBLUE}>
				<CypherText bold header center size={24}>Manage</CypherText>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(SettingsScreen)} color={WEBDARKBLUE}>
				<CypherText bold header center size={24}>Settings</CypherText>
			</DrawerSlot>
			<DrawerSlot onPress={() => props.navigation.navigate(AboutScreen)} color={WEBPINK}>
				<CypherText bold header center size={24}>About</CypherText>
			</DrawerSlot>
        </SafeAreaView>
        
    )
}
const customDrawerMap = (state, ownProps) => ({
	first_name:state.profile.first_name,
	last_name:state.profile.last_name,
})

const dispatchMap = (dispatch) => ({
	logout:() => dispatch({type:ActionTypes.LOGOUT})
})

const customDrawerContainer = connect(customDrawerMap, dispatchMap)(customDrawer)
export default customDrawerContainer