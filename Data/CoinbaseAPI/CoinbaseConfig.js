export const CoinbaseConfig = {
    APP_ID:'3d7cb5a5c583949d48027046310f7c50c7435dd1e5763caca6233bcaf85d5185',
    AUTH_ENDPOINT:'https://www.coinbase.com/oauth/authorize?',
    REDIRECT_URI:encodeURIComponent('https://infinite-atoll-68313.herokuapp.com/'),
    EXTRAQUERYPARAMS:'&response_type=code&scope=wallet%3Auser%3Aread'
}

export const CoinbaseAuthRequestURL = `${CoinbaseConfig.AUTH_ENDPOINT}` +
			       `client_id=${CoinbaseConfig.APP_ID}` +
			       `&redirect_uri=${CoinbaseConfig.REDIRECT_URI}` +
			       `${CoinbaseConfig.EXTRAQUERYPARAMS}`

