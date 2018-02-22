//Wrapper for CypherAPI
//This needs to be set to the ip address of the machine
//running the API
//const BASEURL = "https://fathomless-depths-17665.herokuapp.com/"
const BASEURL = "http://192.168.0.20:8000"

const postSignUp = (firstName, lastName, email, password) => {
  const postBody = {
    "first_name":firstName,
    "last_name":lastName,
    "email":email,
    "password":password
  }

  return fetch(BASEURL + '/user/sign-up',
  { method: 'POST',
    body:JSON.stringify(postBody),
    headers: new Headers({
      'Content-Type': 'application/json'
    })}).then((response) => {
	console.log("Response?")
      return response.json()
    }).catch((error) => {
      console.log("Nope!")
    })
}

const postLogin = (email, password) => {
  const postBody = {
    "email":email,
    "password":password
  }

  return fetch(BASEURL + '/user/login', {method: 'POST',
  body:JSON.stringify(postBody),
  headers: new Headers({
    'Content-Type': 'application/json'
  })}).then((response) => {
    return response.json()
  })
}

const linkCoinbaseToCypher = (access_token, coinbase_auth_token) => {
    const postBody = {
	coinbase_auth_token
    }

    console.log("Are we there yet", access_token)

    let headers = new Headers({
	'Content-Type': 'application/json'
    })

    return secureRequest(access_token, "/user/coinbase", postBody, "post", headers)
	.then((response) => {
	    console.log(response)
	    return response.json()
	})
}

const postCoinbase = (access_token) => {
    
}

const secureRequest = (access_token, endPoint, body = {}, method = 'get', headers = {}) => {

    console.log("Headers")
    
    headers.append('Authorization', `Bearer ${access_token}`)

    console.log(headers)
    
    return fetch(`${BASEURL}${endPoint}`, {method, body:JSON.stringify(body), headers
    })
}

export default {
    postLogin,
    postSignUp,
    linkCoinbaseToCypher
}
