import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { APPDARKGRAY} from '@Style/constants.js'
import OAUTHContainer from '@Containers/OAUTHContainer.js'
import {CoinbaseAuthRequestURL} from '@Data/CoinbaseAPI/CoinbaseConfig.js'
import {onCoinbaseOauthComplete} from '@Actions/coinbaseOauth.js'

const PlaidAuthRequestURL = 'null'

class SettingsPageContainer extends React.Component {

    //Necessary?
    constructor(props) {
	super(props)
	this.coinbaseOauthCompletion = this.coinbaseOauthCompletion.bind(this)
	this.plaidOauthCompletion = this.plaidOauthCompletion.bind(this)
    }
    
    coinbaseOauthCompletion(result) {
	this.props.onCoinbaseOauthComplete(result)
    }

    plaidOauthCompletion(result) {
	console.log(result)
    }
    
    render(){

	const coinbaseOauth= {
	    //Should get state for oauthComplete
	    oAuthComplete:this.props.coinbaseComplete,
	    authURL:CoinbaseAuthRequestURL,
	    label:"Coinbase",
	    callback:this.coinbaseOauthCompletion
	}
	
	const plaidOauth = {
	    oAuthComplete:false,
	    authURL:PlaidAuthRequestURL,
	    label:"Plaid",
	    callback:this.plaidOauthCompletion
	}

	
	return (
	    <View style={styles.container}>
	    <Text style={styles.headerText}>Settings is working, {this.props.username}</Text>
	    <View style={styles.oauthContainer}>
	    <OAUTHContainer {...coinbaseOauth} />
	    <OAUTHContainer {...plaidOauth}/>
	    </View>
	    </View>)
    }
}
  const mapStateToProps = (state, ownProps) => {
      return {
	  coinbaseComplete:state.coinbaseOauth.isComplete,
      };
  }

  const mapDispatchToProps = (dispatch) => {
      return {
	  onCoinbaseOauthComplete: (result) => {dispatch(onCoinbaseOauthComplete(result)) }
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
	    
	    

