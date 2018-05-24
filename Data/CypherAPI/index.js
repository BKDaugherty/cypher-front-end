/**
 * JavaScript SDK for Cypher API
 */
import {BASEURL, Endpoints} from './config'

const postSignUp = (first_name, last_name, email, password) => 
   standardRequest(Endpoints.userSignUp, 'post', {
        first_name,
        last_name,
        email,
        password
    }) 

const postLogin = (email, password) => 
    standardRequest(Endpoints.userLogin, 'post', 
        {   
            grant_type:"authorization",
            email,
            password
        }
    )

const refreshLogin = (refresh_token) =>
    standardRequest(Endpoints.userLogin, 'post', {grant_type:'refresh_token', refresh_token})


const getProfile = (access_token) => secureRequest(access_token, Endpoints.userProfile)

//These two could prolly be abstracted into one function as well...
const linkCoinbaseToCypher = (coinbase_code, access_token) => {
    if(!coinbase_code){
        console.error("No coinbase token to post")
    } else {
        console.log("Access token:", access_token)
        console.log("Coinbase Code:", coinbase_code)
        return secureRequest(access_token, Endpoints.userCoinbase,"post", {coinbase_code})
    }
}

const linkPlaidToCypher = (plaid_auth_token, access_token) => {
    if(!plaid_auth_token){
        console.error("No plaid token to post")
    } else {
        return secureRequest(access_token, Endpoints.userPlaid,"post", {plaid_auth_token})
    }
}

// Enumeration or something to avoid all of this?
const mapCoinToAbbrev = (coinName) => {
    const coin = coinName.replace(/\s+/g, '').toLowerCase();
    switch(coin){
        case "bitcoin": 
            return "btc"
        case "ethereum":
            return "eth"
        case "bitcoincash":
            return "bch"
        case "litecoin":
            return "ltc"
    }
}

// State should be uplifted so we get all states and simply
// hold this information and throw it to the components...
const getBalance = (access_token, coinName) => {
    const abbrev = mapCoinToAbbrev(coinName)
    return secureRequest(access_token, Endpoints.userPortfolio)
}

// Used to extract the response in json form
async function parseResponse(response) {
    if(response.status >= 400){
        let errorResponse = await response.json()
        if(response.status == 401)
            throw {message:errorResponse.error, status:response.status}
        else {
            throw {message:errorResponse.error, status:response.status}
        }
    } else {
        return response.json()
    }
}


// Curried abstraction for fetch
// With secure token inline
const secureRequest = (access_token, endPoint, method = 'get',  body = null, headers = {}) => {
    headers.Authorization = `Bearer ${access_token}`
    return standardRequest(endPoint, method, body, headers)
}


//Base abstraction for request to Cypher API
const standardRequest = (endPoint, method ='get',  body = null, passedHeaders = {}) => {

    let headers = new Headers({
	    'Content-Type': 'application/json'
    })

    Object.keys(passedHeaders).forEach( key => {
	    headers.append(key, passedHeaders[key])
    })

    // console.log(`Sending ${method} to ${endPoint}`)
    // console.log(body)

    if(body){
        return fetch(`${BASEURL}${endPoint}`, {method, body:JSON.stringify(body), headers})
        .then(parseResponse) 
    } else {
        return fetch(`${BASEURL}${endPoint}`, {method, headers})
        .then(parseResponse) 
    }
}

export default {
    postLogin,
    postSignUp,
    linkCoinbaseToCypher,
    linkPlaidToCypher,
    getBalance,
    mapCoinToAbbrev,
    refreshLogin,
    getProfile
}
