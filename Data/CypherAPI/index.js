//Wrapper for CypherAPI --> Could have a request manager?
//It queries the state of the application and checks if things are allowed to
//happen?
import {BASEURL, Endpoints} from './config'

const postSignUp = (first_name, last_name, email, password) => {
  const postBody = {
      first_name,
      last_name,
      email,
      password
  }

    return standardRequest(Endpoints.userSignUp, 'post', postBody) 
}

const postLogin = (email, password) => {
    const postBody = {
	    email,
	    password
    }

    return standardRequest(Endpoints.userLogin, 'post', postBody)
}

async function parseResponse(response) {
    if(response.status >= 400){
        let errorResponse = await response.json()
        throw {message:errorResponse.error, status:response.status}
    } else {
        return response.json()
    }
}

//These two could prolly be abstracted into one function as well...
const linkCoinbaseToCypher = (access_token, coinbase_code) => {
    const postBody = {
        coinbase_code
    }

    if(!coinbase_code){
        console.error("No coinbase token to post")
    } else {
        console.log(access_token)
        return secureRequest(access_token, Endpoints.userCoinbase,"post", postBody)
    }
}

const linkPlaidToCypher = (access_token, plaid_auth_token) => {
    const postBody = {
	    plaid_auth_token
    }

    if(!plaid_auth_token){
        console.error("No plaid token to post")
    } else {
        return secureRequest(access_token, Endpoints.userPlaid,"post", postBody)
    }
}

//Enumeration or something to avoid all of this?
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

//State should be uplifted so we get all states and simply
//hold this information and throw it to the components...
const getBalance = (access_token, coinName) => {
    const abbrev = mapCoinToAbbrev(coinName)
    //console.log("Sending request", access_token)
    return secureRequest(access_token, Endpoints.userPortfolio).then(parseResponse)
}

//Curried abstraction for fetch
//With secure token inline
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

    console.log(`${BASEURL}${endPoint}`)

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
    mapCoinToAbbrev
}
