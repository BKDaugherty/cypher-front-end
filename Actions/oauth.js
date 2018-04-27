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
const genLinkToCypherAction = (CypherAPILink, SUCCESS, FAILURE) => {
    return (access_token, appAuthCode) => {
		return async (dispatch) => {
			try {
				const response = await CypherAPILink(access_token, appAuthCode)
				return {type:SUCCESS}
			}
			catch (error) {
				return {type:FAILURE, error}
			}
		}
	}
}

export const plaidOnOAUTHComplete = genOnOAUTHComplete(CypherAPI.linkPlaidToCypher, ActionTypes.COINBASE_OAUTH_SUCCESS, ActionTypes.COINBASE_OAUTH_FAILURE)
export const coinbaseOnOAUTHComplete = genOnOAUTHComplete(CypherAPI.linkCoinbaseToCypher, ActionTypes.PLAID_OAUTH_SUCCESS,ActionTypes.PLAID_OAUTH_FAILURE)