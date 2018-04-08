import React from 'react'
import {connect} from 'react-redux'
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text} from 'react-native'
import {APPDARKGRAY, WEBDARKBLUE, WEBLIGHTBLUE, WEBPINK} from "@Style/constants"
import {LoginScreen, SettingsScreen, PortfolioTab } from '@Navigation/Routes'
import { CypherText } from '@Style/BaseComponents';

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
                    <CypherText>Hello {props.username}! Balance: $0</CypherText>
                </DrawerSlot>
                <DrawerSlot onPress={() => props.navigation.navigate(LoginScreen)} color={WEBDARKBLUE}>
					<CypherText>About</CypherText>
				</DrawerSlot>
                <DrawerSlot onPress={() => props.navigation.navigate(SettingsScreen)} color={WEBLIGHTBLUE}>
					<CypherText>Settings</CypherText>
				</DrawerSlot>
                <DrawerSlot onPress={() => props.navigation.navigate(LoginScreen)} color={WEBPINK}>
					<CypherText>Logout</CypherText>
				</DrawerSlot>
        </SafeAreaView>
        
    )
}
const customDrawerMap = (state, ownProps) => ({
    username:state.auth.username,
})

const customDrawerContainer = connect(customDrawerMap)(customDrawer)
export default customDrawerContainer