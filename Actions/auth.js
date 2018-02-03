
import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'
//Pure functions yay!

export const loginRequest = (username, password, navigate) => {
  return (dispatch) => {
    return CypherAPI.postLogin(username, password)
    .then(response => {

      //Need someway to implement refresh logic --> Add a subscriber
      //Or set timeout to perform another login request here!
      //Thank the lord for Event Driven Programming!
      const token = response.access_token

      dispatch(loginRequestSuccess(username, token))
      navigate('HomePage')
    }).catch(error => {
      console.log(error)
      throw(error)
    })
  }
}

export const loginRequestSuccess = (username, token) => {
  return {type: ActionTypes.LOGIN_REQUEST_SUCCESS, username, token}
}




export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    };
};

export const signup = (username, password) => {
   return (dispatch) => {
   };
};
