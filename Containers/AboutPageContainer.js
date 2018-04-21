//React
import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'

//Styles
import { WEBLIGHTBLUE} from '@Style/constants.js'


const AboutPageContainer = (props) => {
	return (
	    <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>About</Text>
	    </SafeAreaView>)
    
}

const styles = StyleSheet.create({
    container:{
	flex:1,
	flexDirection:'column',
	backgroundColor:WEBLIGHTBLUE,
	justifyContent:'flex-start',
	alignItems:'center',
	
    },
    headerText:{
	paddingTop:20,
	fontSize:25,
	color:'white'
    },
})

export default AboutPageContainer
