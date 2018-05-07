import ActionTypes from '@Actions/ActionTypes.js'
import CypherAPI from '@Data/CypherAPI/index.js'

// const genOnOAUTHComplete = (cypherAPILink) => {
//     return (appAuthCode, access_token) => {
// 		return(dispatch) => {
// 			//Hoping that both coinbase and
// 			//plaid use the same configuration...
// 			console.log(access_token)
// 			const linkAppToCypher = genLinkToCypherAction(cypherAPILink)
// 			//Define general dispatch to link app with?
// 			return dispatch(linkAppToCypher(access_token, appAuthCode))
// 		}
//     }
// }

//Generates the function to be dispatched
//after the authCode is received
const genLinkToCypherAction = (CypherAPILink, SUCCESS, FAILURE) => {
    return (appAuthCode, access_token) => {
		return async (dispatch) => {
			try {
				const response = await CypherAPILink(appAuthCode, access_token)
				return dispatch({type:SUCCESS})
			}
			catch (error) {
				return dispatch({type:FAILURE, error})
			}
		}
	}
}

export const plaidOnOAUTHComplete = genLinkToCypherAction(CypherAPI.linkPlaidToCypher,  ActionTypes.PLAID_OAUTH_SUCCESS,ActionTypes.PLAID_OAUTH_FAILURE)
export const coinbaseOnOAUTHComplete = genLinkToCypherAction(CypherAPI.linkCoinbaseToCypher,ActionTypes.COINBASE_OAUTH_SUCCESS, ActionTypes.COINBASE_OAUTH_FAILURE)