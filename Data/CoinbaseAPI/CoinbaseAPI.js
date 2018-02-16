import {CoinbaseConfig} from '@Data/CoinbaseAPI/CoinbaseConfig.js'

const exchangeCodeForToken = (code) => {
    const postBody = {
	'grant_type':'authorization_code',
	'code':code,
	'client_id':CoinbaseConfig.APP_ID,
	'client_secret':"???"
    }
}
