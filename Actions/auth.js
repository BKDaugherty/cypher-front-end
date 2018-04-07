import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

import {PortfolioTab, LoginScreen} from '@Navigation/Routes'

//Pure functions yay!
export function loginRequest(username, password, navigate) {
  return async (dispatch) => {
    //Start the login request
    dispatch({type:ActionTypes.INITIATE_LOGIN_REQUEST})
    try {
        //Get the response from the Cypher Server
        const response = await CypherAPI.postLogin(username, password)
        //Dispatch success
        return dispatch(loginRequestSuccess(username, response.token, navigate))
    }
    catch(error){
        //Extract the error
        const errorObject = await error
        const errorMessage = errorObject.error
        return dispatch(loginRequestFailure(errorMessage))
    }
  }
}

//Dispatched on success
export const loginRequestSuccess = (username, token, navigate) => {
    //Navigate to the homepage on success
    navigate(PortfolioTab)
    return {type: ActionTypes.LOGIN_REQUEST_SUCCESS, username, token}
}

//Dispatched on failure
export const loginRequestFailure = (error) => {
    return {type:ActionTypes.LOGIN_REQUEST_FAILURE, error}
}

export const signUpRequest = (firstName, lastName, email, password, navigate) => {

    return async (dispatch) => {
        
        //Signal to the redux store that the signup has begun processing
        dispatch({type:ActionTypes.INITIATE_SIGNUP_REQUEST})

        try{
            //Await the response from the cypher server
            const response = await CypherAPI.postSignUp(firstName, lastName, email, password)

            //Navigate back to login --> Don't really like that this is here...
            navigate(LoginScreen)

            //Dispatch the success of signup
            //Signal to the user that signup was successful
            return dispatch({type:ActionTypes.SIGNUP_REQUEST_SUCCESS})
        } 
        catch(error){
            const errorObj = await error
            const errorMessage = error.error
            console.log(errorObj)
            return dispatch({
                type:ActionTypes.SIGNUP_REQUEST_FAILURE,
                error: errorMessage
            })
            
        }
  }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    };
};
