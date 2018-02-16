//Wrapper for CypherAPI
//This needs to be set to the ip address of the machine
//running the API
//const BASEURL = "https://fathomless-depths-17665.herokuapp.com/"
const BASEURL = "http://192.168.0.68:8000"

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
      console.log(response)
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
    console.log(response)
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
