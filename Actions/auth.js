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

	console.log("success")
	return dispatch(loginRequestSuccess(username, token, navigate))

    }).catch(error => {

	console.log(error)
	return dispatch(loginRequestFailure(username))

    })
  }
}

//Dispatched on success
export const loginRequestSuccess = (username, token, navigate) => {
    //Navigate to the homepage on success
    navigate('HomePage')
    return {type: ActionTypes.LOGIN_REQUEST_SUCCESS, username, token}
}

//Dispatched on failure
export const loginRequestFailure = (username) => {
    return {type:ActionTypes.LOGIN_REQUEST_FAILURE, username}
}

export const signUpRequest = (firstName, lastName, email, password, navigate) => {
    return (dispatch) => {
	console.log("Attempting signup")
    return CypherAPI.postSignUp(firstName, lastName, email, password)
    .then((response) => {
	//Tell the user signup was successful?
	navigate('loginScreen')
	return dispatch(signUpRequestSuccess())
    }).catch(error => {
      console.log(error)
      throw(error)
    })
  }
}

//Signal to the user that signup was successful
//Should in a real app send them an email?
export const signUpRequestSuccess = () => {
  return {type: ActionTypes.SIGNUP_REQUEST_SUCCESS}
}


export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    };
};
