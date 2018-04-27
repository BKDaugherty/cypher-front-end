//React
import React from 'react'
import {SafeAreaView, StyleSheet, Image, View} from 'react-native'
import {CypherText} from '@Style/BaseComponents'
import HowItWorks from '@Images/How_It_Works_Mobile.png'
//Styles
import { WEBLIGHTBLUE} from '@Style/constants.js'


const AboutPageContainer = (props) => {
	return (
	    <SafeAreaView style={styles.container}>
            <CypherText center header>About</CypherText>
			<View style={styles.contentContainer}>
			<CypherText center>
				At Cypher, we'd like to build a platform that gives everyone easy access to cryptocurrency investments.
			</CypherText>
			<CypherText center>
				Thank you for being a part of our beta program. If you have any questions or feedback, please let us know through testflight, or email info@cypherapp.io.
			</CypherText>
			<CypherText center>
				Thanks again, The Cypher Team
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

export default AboutPageContainer
