import ActionTypes from '@Actions/ActionTypes.js'
import CypherAPI from '@Data/CypherAPI/index.js'

//Should we also here dispatch a timer for refresh?
export const onCoinbaseOauthComplete = (result) => {
    return (dispatch) => {
	//Parse result for token and check for errors
	const token = result.params.token
	dispatch(coinbaseOauthSuccess(token))
	return 
//	return CypherAPI.
	
    }

}

export const coinbaseOauthSuccess = (token) => {
	return {type: ActionTypes.COINBASE_OAUTH_SUCCESS, token}
}

