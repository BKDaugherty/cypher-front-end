//Wrapper for CypherAPI
const BASEURL = "localhost:8000"

export const postSignUp = (firstName, lastName, email, password) => {
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
  })
}

export const postLogin = (username, password) => {
  return fetch(BASEURL + '/user/login', {method: 'POST',
  body:{
    "email":email,
    "password":password
  },
  headers: new Headers({
    'Content-Type': 'application/json'
  })})
}

export const getCoinbase = (access_token) => {

}

export const postCoinbase = (access_token) => {

}
