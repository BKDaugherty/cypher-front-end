//Wrapper for CypherAPI
import {BASEURL, Endpoints} from './config'

const postSignUp = (first_name, last_name, email, password) => {
  const postBody = {
      first_name,
      last_name,
      email,
      password
  }

    return standardRequest(Endpoints.userSignUp, 'post', postBody) 
     .then((response) => {
	 return response.json()
     })
}

const postLogin = (email, password) => {
    const postBody = {
	email,
	password
    }

    return standardRequest(Endpoints.userLogin, 'post', postBody) 
     .then((response) => {
	 return response.json()
     })
}

//These two could prolly be abstracted into one function as well...
const linkCoinbaseToCypher = (access_token, coinbase_auth_token) => {
    const postBody = {
	coinbase_auth_token
    }

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
    
}



export default {
    postLogin,
    postSignUp,
    linkCoinbaseToCypher,
    linkPlaidToCypher
}
