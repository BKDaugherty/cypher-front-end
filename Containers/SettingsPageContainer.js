//React
import React from 'react'
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native'

//Styles
import { APPDARKGRAY} from '@Style/constants.js'

//OAUTH Implementations
import OAUTHSwitch from '@Components/OAUTHSwitch.js'
import {plaidOnOAUTHComplete, coinbaseOnOAUTHComplete} from '@Actions/oauth.js'

//OAUTH Configurations
import {CoinbaseAuthRequestURL} from '@Data/OAUTH/CoinbaseConfig.js'
import {PlaidAuthRequestURL} from '@Data/OAUTH/PlaidConfig.js'

//Redux
import {connect} from 'react-redux'

class SettingsPageContainer extends React.Component {
    
    constructor(props) {
	super(props)
	//Bind this context to ensure that javascript this is correct
	this.coinbaseOAUTHCompletion = this.coinbaseOAUTHCompletion.bind(this)
	this.plaidOAUTHCompletion = this.plaidOAUTHCompletion.bind(this)
    }
    
    coinbaseOAUTHCompletion(result) {
	const token = this.props.cypherAccessToken
	this.props.onCoinbaseOAUTHComplete(result, token)
    }

    plaidOAUTHCompletion(result) {
	console.log(result)
    }
    
    render(){

	const coinbaseOAUTH= {
	    //Should get state for oauthComplete
	    OAUTHComplete:this.props.coinbaseComplete,
	    authURL:CoinbaseAuthRequestURL,
	    label:"Coinbase",
	    callback:this.coinbaseOAUTHCompletion
	}
	
	const plaidOAUTH = {
	    OAUTHComplete:false,
	    authURL:PlaidAuthRequestURL,
	    label:"Plaid",
	    callback:this.plaidOAUTHCompletion
	}

	
	return (
	    <View style={styles.container}>
	    <Text style={styles.headerText}>Settings is working, {this.props.username}</Text>
	    <View style={styles.oauthContainer}>
	    <OAUTHSwitch {...coinbaseOAUTH} />
	    <OAUTHSwitch {...plaidOAUTH}/>
	    </View>
	    </View>)
    }
}
const mapStateToProps = (state, ownProps) => {
      return {
	  coinbaseComplete:state.coinbase.isComplete,
	  plaidComplete:state.plaid.isComplete,
	  cypherAccessToken:state.auth.token
      };
  }

  const mapDispatchToProps = (dispatch) => {
      return {
	  onCoinbaseOAUTHComplete: (result, cypherAccessToken) => {
	      return dispatch(coinbaseOnOAUTHComplete(result, cypherAccessToken)) },
	  onPlaidOAUTHComplete: (result, cypherAccessToken) => { return dispatch(plaidOnOAUTHComplete(result, cypherAccessToken))
	  }
      }
  }
	    
const styles = StyleSheet.create({
    container:{
	flex:1,
	flexDirection:'column',
	  backgroundColor:APPDARKGRAY,
	justifyContent:'flex-start',
	alignItems:'center',
	
    },
    headerText:{
	paddingTop:20,
	fontSize:25,
	color:'white'
    },
    oauthContainer:{
	display:'flex',
	justifyContent:'flex-start',
	alignSelf:'stretch',
	alignItems:'center',
	paddingTop:20,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer);
