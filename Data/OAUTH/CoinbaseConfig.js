

export const CoinbaseConfig = {
    APP_ID:'90b77a87cb39d951d90cffb4edf89bd4320fad42464caec84b7d7d0b90e39fab',
    AUTH_ENDPOINT:'https://www.coinbase.com/oauth/authorize?',
    REDIRECT_URI:'cypherapp://expo-auth-session',
    EXTRAQUERYPARAMS:'&response_type=code&account=all&scope=wallet%3Aaccounts%3Aread%20wallet%3Apayment-methods%3Aread%20wallet%3Abuys%3Acreate'
}

export const CoinbaseAuthRequestURL = `${CoinbaseConfig.AUTH_ENDPOINT}` +
			       `client_id=${CoinbaseConfig.APP_ID}` +
			       `&redirect_uri=${CoinbaseConfig.REDIRECT_URI}` +
			       `${CoinbaseConfig.EXTRAQUERYPARAMS}`

