import React from 'react'
import {connect} from 'react-redux'
import {Switch, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import {AuthSession} from 'expo'

//OauthComponent to handle
//Oauth integration
export default class OAUTHSwitch extends React.Component {
    constructor(props){
	super(props)
	console.log(this.props.callback)
	this.state = {
	    oauthSetup: this.props.OAUTHComplete ? true : false
	}
    }
    
    _handleAsyncSwitch = async () => {
	//Prolly just send an AuthSession Config
	let result = await AuthSession.startAsync({
		authUrl:this.props.authURL
	});

	this.props.callback(result)

	this.setState({ oauthSetup:true })
    }
    
    render(){
	return (
	    <View style={styles.container}>
	    <Text style={styles.OauthLabel}>{this.props.label}</Text>
	    <Switch value={this.state.oauthSetup} onValueChange={(value) => {
		this._handleAsyncSwitch()
	    }}/>
	    </View>
	);

    }
}


const styles = StyleSheet.create({
    container:{
	flexDirection:'row',
	padding:5,
	margin:2,
	  backgroundColor:'white',
	justifyContent:'center',
	width:'100%',
	alignItems:'center',

    },
    headerText:{
	paddingTop:20,
	fontSize:25,
	color:'white'
    },
    OauthLabel:{
	fontSize:20,
	color:APPDARKGRAY,
	paddingLeft:'5%',
	paddingRight:'5%',
    }
})
