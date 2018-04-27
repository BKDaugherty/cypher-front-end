import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

import {PortfolioTab, LoginScreen} from '@Navigation/Routes'

const errorDelay = 3000
export const resetLogin = () => ({type:ActionTypes.RESET_LOGIN})
export const resetSignUp = () => ({type:ActionTypes.RESET_SIGNUP})

//Pure functions yay!
export function loginRequest(username, password, navigate) {
  return async (dispatch) => {
    //Start the login request
    dispatch({type:ActionTypes.INITIATE_LOGIN_REQUEST})
    try {
        //Get the response from the Cypher Server
        const response = await CypherAPI.postLogin(username, password)
        //Dispatch success
        return dispatch(loginRequestSuccess(username, response.access_token, navigate))
    }
    catch(error){
        //Extract the error
        const message = await extractErrorMessage(error)

        setTimeout(() => {
            dispatch(resetLogin())
        }, errorDelay)

        return dispatch(loginRequestFailure(message))
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

const extractErrorMessage = async (error) => {
    const errorObj = await error
    const errorMessageObj = errorObj.message
    if(typeof(errorMessageObj) == "string"){
        return errorMessageObj
    } else {
        let message = "" 
        for(val in errorMessageObj){
            if(message == ""){
                message = message + errorMessageObj[val]
            } else {
                message = message + '\n' + errorMessageObj[val]
            }
            
        } 
        return message
    }
}

export const signUpError = (errorMessage) => {
    return {
        type:ActionTypes.SIGNUP_REQUEST_FAILURE,
        error: errorMessage
    }
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
            const message = await extractErrorMessage(error)

            setTimeout(() => {
                dispatch(resetSignUp())
            }, errorDelay)

            // Send the error to the store
            dispatch(signUpError(message))
        }
  }
}