import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

import {PortfolioTab, OAuthScreen} from '@Navigation/Routes'

const errorDelay = 3000
export const resetLogin = () => ({type:ActionTypes.RESET_LOGIN})
export const resetSignUp = () => ({type:ActionTypes.RESET_SIGNUP})

export function loginRequest(email, password, navigate) {
  return async (dispatch) => {
    // Tell UI we are starting login request
    dispatch({type:ActionTypes.INITIATE_LOGIN_REQUEST})
    try {
        // Send the login Request to CypherAPI
        const response = await CypherAPI.postLogin(email, password)
        
        if(navigate){
            navigate(PortfolioTab)
        }

        // Request Success! Tell the store what happened
        return dispatch(loginRequestSuccess(email, response.access_token, response.refresh_token, response.expires_in))
    }
    catch(error){
        // Extract the error
        const message = await extractErrorMessage(error)

        // Set a timeout to adjust the UI
        setTimeout(() => {dispatch(resetLogin())}, errorDelay)

        // Display the error
        return dispatch(loginRequestFailure(message))
    }
  }
}

// Refresh the access_token using the long-lasting refresh_token
export function refreshLogin(email, refresh_token){
    return async(dispatch) => {
        dispatch({type:ActionTypes.INITIATE_LOGIN_REFRESH_REQUEST})
        try {
            const response = await CypherAPI.refreshLogin(refresh_token)
            return dispatch(loginRequestSuccess(email, response.access_token, response.refresh_token, response.expires_in))
        } catch (error) {
            const message = await extractErrorMessage(error)
            return dispatch(loginRequestFailure(message))
        }
    }
}

// export function refreshAuthOnError(){
//     return async(dispatch, getState) => {
//         const {email, refresh_token} = getState().auth
//         if(email && refresh_token)
//             dispatch(refreshLogin(email, refresh_token))
//     }
// }

// Successful login sets a timeout to refresh the token when needed!
// Probably better to set a flag that says its stale, and then check in 
// calls that require the access_token. But this might work! Subtracted some to be safe
export const loginRequestSuccess = (email, access_token, refresh_token, timeout) => 
    (dispatch) => {
    setTimeout(() => {
        dispatch(refreshLogin(email, refresh_token))
    }, (timeout) * 1000)

    return dispatch({type: ActionTypes.LOGIN_REQUEST_SUCCESS, email, access_token, refresh_token})
}



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
            // Sign the user up for cypher. Await the response from the server
            const signUpResponse = await CypherAPI.postSignUp(firstName, lastName, email, password)
            dispatch({type:ActionTypes.SIGNUP_REQUEST_SUCCESS})

            // If the response was successful, we make a login request.
            const loginResponse = await CypherAPI.postLogin(email, password)
            dispatch(loginRequestSuccess(email, loginResponse.access_token, loginResponse.refresh_token, loginResponse.expires_in))

            // If still successful, navigate to the oauth screen
            navigate(OAuthScreen)
            return
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