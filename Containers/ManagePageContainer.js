//React
import React from 'react'
import {SafeAreaView, StyleSheet, Image, View} from 'react-native'
import {CypherText} from '@Style/BaseComponents'

//Styles
import { WEBLIGHTBLUE} from '@Style/constants.js'


const ManagePageContainer = (props) => {
	return (
	    <SafeAreaView style={styles.container}>
            <CypherText center header>Manage</CypherText>
			<View style={styles.contentContainer}>
			<CypherText center>
				Coming soon to an alpha near you.
			</CypherText>
			</View>

	    </SafeAreaView>)
    
}

const styles = StyleSheet.create({
    container:{
	flex:1,
	flexDirection:'column',
	backgroundColor:WEBLIGHTBLUE,
	justifyContent:'flex-start',
	alignItems:'center',
	paddingTop:10
	
	},
	contentContainer:{
		flex:1,
		flexDirection:'column',
		paddingLeft:15,
		paddingRight:15,
		justifyContent:'space-around',
		alignItems:'center'
	
	},
    headerText:{
	paddingTop:20,
	fontSize:25,
	color:'white'
    },
})

export default ManagePageContainer
