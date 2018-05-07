//React
import React from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native'

//Styles
import { APPDARKGRAY} from '@Style/constants.js'

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

import { PortfolioTab } from '@Navigation/Routes';

import {PLAID_CLIENT_ID, 
		PLAID_PUBLIC_KEY,
		PLAID_ENV, 
		PLAID_PRODUCT,
		PLAID_CLIENT_NAME} from '@Data/OAUTH/PlaidConfig'


class OAuthPageContainer extends React.Component {
    
    constructor(props) {
	super(props)
	//Bind this context to ensure that javascript this is correct
		this.coinbaseOAUTHCompletion = this.coinbaseOAUTHCompletion.bind(this)
		this.plaidOnMessage = this.plaidOnMessage.bind(this)
		this.plaidOnSuccess = this.plaidOnSuccess.bind(this)
		this.plaidOnExit = this.plaidOnExit.bind(this)
		this.openApp = this.openApp.bind(this)
	
	}
	
	// Removes the back button
	static navigationOptions = {
		headerLeft:null,
		gesturesEnabled:false,
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

	openApp(){
		const navigate = this.props.navigation.navigate
		navigate(PortfolioTab)
	}
    
    openModal(){
		this.setState({modalVisible:true})
    }

    closeModal(){
		this.setState({modalVisible:false})
    }

    render(){

	const coinbaseOAUTH = {
	    //Should get state for oauthComplete
	    OAUTHComplete:this.props.coinbaseComplete,
	    authURL:CoinbaseAuthRequestURL,
	    label:"Link a coinbase account!",
	    callback:this.coinbaseOAUTHCompletion
	}

	// Avoid plaid for now
	const canContinue = this.props.coinbaseComplete && (this.props.plaidComplete || true)

	return (
	    <View style={styles.container}>
	    <CypherText header center>Almost There...</CypherText>
        <CypherText center>
            To start your adventure in the decentralized world, 
            you'll need to link a credit provider so that Cypher can keep track of your roundups, 
            and also a coinbase account, so that you can store your cryptocurrency securely!
        </CypherText> 
	    <View style={styles.buttonContainer}>

	    <Button style={{margin:10}} onPress={ () => this.openModal()}>
	    	<CypherText center>Link a credit provider!</CypherText>
	    </Button>

        <CypherText>{this.props.coinbaseComplete}{this.props.plaidComplete}</CypherText>
	    
		<OAUTHSwitch {...coinbaseOAUTH} />

		<Button disabled={!canContinue} style={{margin:10, backgroundColor: canContinue? '#000':'#555'}} onPress={ () => this.openApp()}>
			<CypherText center>Continue</CypherText>
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
	  	cypherAccessToken:state.auth.access_token
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
		backgroundColor:APPDARKGRAY,
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

export default connect(mapStateToProps, mapDispatchToProps)(OAuthPageContainer);
