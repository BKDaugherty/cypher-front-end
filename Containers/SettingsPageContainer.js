//React
import React from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native'

//Styles
import { WEBDARKBLUE} from '@Style/constants.js'

//OAUTH Implementations
import OAUTHSwitch from '@Components/OAUTHSwitch.js'
import {plaidOnOAUTHComplete, coinbaseOnOAUTHComplete} from '@Actions/oauth.js'

//OAUTH Configurations
import {CoinbaseAuthRequestURL} from '@Data/OAUTH/CoinbaseConfig.js'
import PlaidAuthenticator from 'react-native-plaid-link'

import {CypherText} from '@Style/BaseComponents'
import Button from '@Components/Button'

//Redux
import {connect} from 'react-redux'

import {PLAID_CLIENT_ID, 
		PLAID_PUBLIC_KEY,
		PLAID_ENV, 
		PLAID_PRODUCT,
		PLAID_CLIENT_NAME} from '@Data/OAUTH/PlaidConfig'

class SettingsPageContainer extends React.Component {
    
    constructor(props) {
	super(props)
	//Bind this context to ensure that javascript this is correct
		this.coinbaseOAUTHCompletion = this.coinbaseOAUTHCompletion.bind(this)
		this.plaidOnMessage = this.plaidOnMessage.bind(this)
		this.plaidOnSuccess = this.plaidOnSuccess.bind(this)
		this.plaidOnExit = this.plaidOnExit.bind(this)
	
    }
    
    coinbaseOAUTHCompletion(result) {
		const token = this.props.cypherAccessToken
		//Need to do error handling somewhere...
		const public_code = result.params.code
		this.props.onCoinbaseOAUTHComplete(public_code, token)
    }

    state = {
		modalVisible: false
    }

    plaidOnSuccess(public_token, metadata) {
	//Dispatch this to matthew
		console.log(public_token)
		const token = this.props.cypherAccessToken
		this.props.onPlaidOAUTHComplete(public_token, token)
		this.closeModal()
    }

    plaidOnExit(err, metadata){
		//Do something with error
		console.log(err)
		this.closeModal()
    }

    plaidOnMessage(data){
	console.log(data)
	if(data && data.eventName){
		console.log(data.eventName)
		
	}

	//Success
	if(data.action == "plaid_link-undefined::connected"){
	    this.plaidOnSuccess(data.metadata.public_token, data.metadata)
	}
	//User exit
	else if (data.action == "plaid_link-undefined::exit") {
	    this.plaidOnExit(data.error, data.metadata)
	}
	
}
    
    openModal(){
		this.setState({modalVisible:true})
    }

    closeModal(){
		this.setState({modalVisible:false})
    }

    render(){

	const coinbaseOAUTH= {
	    //Should get state for oauthComplete
	    OAUTHComplete:this.props.coinbaseComplete,
	    authURL:CoinbaseAuthRequestURL,
	    label:"Press here to link your Coinbase account, and start your journey in the decentralized world!",
	    callback:this.coinbaseOAUTHCompletion
	}

	
	return (
	    <View style={styles.container}>
	    <CypherText header center>Settings</CypherText>
	    <View style={styles.buttonContainer}>
		<OAUTHSwitch {...coinbaseOAUTH} />

	    <Button style={{margin:10}} onPress={ () => this.openModal()}>
	    	<CypherText center>Press here to link your bank account, and start your journey in the decentralized world!</CypherText>
	    </Button>
	    
	    <Modal
	    	visible={this.state.modalVisible}
	    	animationType={'slide'}
	    	onRequestClose={() => this.closeModal()}
	    >

	    <PlaidAuthenticator
	    	publicKey={PLAID_PUBLIC_KEY}
	    	env={PLAID_ENV}
	    	product={PLAID_PRODUCT}
	    	clientName={PLAID_CLIENT_NAME}
	    	onMessage={this.plaidOnMessage}
	    />
	    </Modal>
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
			return dispatch(coinbaseOnOAUTHComplete(result, cypherAccessToken)) 
		},
		onPlaidOAUTHComplete: (result, cypherAccessToken) => { 
			return dispatch(plaidOnOAUTHComplete(result, cypherAccessToken))
		}
	}
}
	    
const styles = StyleSheet.create({
    container:{
		flex: 1,
		padding:20,
		backgroundColor:WEBDARKBLUE,
		flexDirection:'column',
		justifyContent: 'flex-start',
		alignItems:'stretch'
    },
    headerText:{
		paddingTop:20,
		fontSize:25,
		color:'white'
    },
    buttonContainer:{
		flex:1,
		display:'flex',
		justifyContent:'flex-start',
		alignSelf:'stretch',
		alignItems:'center',
		padding:20,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer);
