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

function parseResponse(response) {
    if(response.status >= 400){
        throw response.json()
    } else {
        return response.json()
    }
}

//These two could prolly be abstracted into one function as well...
const linkCoinbaseToCypher = (access_token, coinbase_auth_token) => {
    const postBody = {
	coinbase_auth_token
    }

    console.log("Coinbase Auth Token:")
    console.log(coinbase_auth_token)
    
    return secureRequest(access_token, Endpoints.userCoinbase,"post", postBody).then((response) => {
	return response.json()
    })
}

const linkPlaidToCypher = (access_token, plaid_auth_token) => {
    const postBody = {
	plaid_auth_token
    }
    
    return secureRequest(access_token, Endpoints.userPlaid,"post", postBody).then((response) => {
	return response.json()
    })
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
    return secureRequest(access_token, Endpoints.userPortfolio)
}

//Curried abstraction for fetch
//With secure token inline
const secureRequest = (access_token, endPoint, method = 'get',  body = {}, headers = {}) => {
    headers.Authorization = `Bearer ${access_token}`
    return standardRequest(endPoint, method, body, headers)
}


//Base abstraction for request to Cypher API
const standardRequest = (endPoint, method ='get',  body = {}, passedHeaders = {}) => {

    let headers = new Headers({
	'Content-Type': 'application/json'
    })

    Object.keys(passedHeaders).forEach( key => {
	headers.append(key, passedHeaders[key])
    })
    
    return fetch(`${BASEURL}${endPoint}`, {method, body:JSON.stringify(body), headers})
    .then(parseResponse) 

    
}



export default {
    postLogin,
    postSignUp,
    linkCoinbaseToCypher,
    linkPlaidToCypher
}
