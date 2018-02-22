import ActionTypes from '@Actions/ActionTypes.js'
import CypherAPI from '@Data/CypherAPI/index.js'

//Should we also here dispatch a timer for refresh?
export const onCoinbaseOauthComplete = (result, cypherAccessToken) => {

    return (dispatch) => {
	//Parse result for token and check for errors
	const coinbaseCode = result.params.code
	return dispatch(linkCoinbaseToCypher(cypherAccessToken,coinbaseCode))
    }
}

export const linkCoinbaseToCypher = (access_token, coinbase_code) => {
    return (dispatch) => {
	CypherAPI.linkCoinbaseToCypher(access_token, coinbase_code)
		 .then((response) => {
		     return dispatch(coinbaseOauthSuccess)
		     })
    }
}

export const coinbaseOauthSuccess = (token) => {
	return {type: ActionTypes.COINBASE_OAUTH_SUCCESS}
}

