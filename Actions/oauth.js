import ActionTypes from '@Actions/ActionTypes.js'
import CypherAPI from '@Data/CypherAPI/index.js'


const genOnOAUTHComplete = (cypherAPILink) => {
    return (appAuthCode, cypherAccessToken) => {
	return(dispatch) => {
	    //Hoping that both coinbase and
	    //plaid use the same configuration...
	    
	    const linkAppToCypher = genLinkToCypherAction(cypherAPILink)
	    //Define general dispatch to link app with?
	    return dispatch(linkAppToCypher(cypherAccessToken, appAuthCode))
	}
    }
}


//Generates the function to be dispatched
//after the authCode is received
const genLinkToCypherAction = (CypherAPILink) => {
    return (access_token, appAuthCode) => {
	return (dispatch) => {
	    CypherAPILink(access_token, appAuthCode)
		.then( response => {
		    return {type: OAUTH_SUCCESS}
		})
	}
    }
}

export const plaidOnOAUTHComplete = genOnOAUTHComplete(CypherAPI.linkPlaidToCypher)
export const coinbaseOnOAUTHComplete = genOnOAUTHComplete(CypherAPI.linkCoinbaseToCypher)


