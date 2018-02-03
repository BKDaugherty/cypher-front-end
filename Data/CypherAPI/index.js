//Wrapper for CypherAPI
//This needs to be set to the ip address of the machine
//running the API
const BASEURL = "http://131.179.24.98:8000"

const postSignUp = (firstName, lastName, email, password) => {
  return fetch(BASEURL + '/user/signup',
  { method: 'POST',
    body:{
      "first_name":firstName,
      "last_name":lastname,
      "email":email,
      "password":password
    },
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    return response.json()
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

const getCoinbase = (access_token) => {

}

const postCoinbase = (access_token) => {

}

export default {
  postLogin,
  postSignUp,
  getCoinbase,
  postCoinbase
}
