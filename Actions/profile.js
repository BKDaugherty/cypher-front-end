/**
 * Defines the actions that can be taken on the profile
 * portion of the store
 */

import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

// Asynchronous action to get the user profile 
// and notify Redux Reducer
export const GetUserProfile = (access_token) => async (dispatch) => {
    console.log("GETTING PROFILE")
    dispatch({type:ActionTypes.INITIATE_GET_PROFILE_REQUEST})
    try {
        const Profile = await CypherAPI.getProfile(access_token)
        return dispatch({type:ActionTypes.GET_PROFILE_SUCCESS, ...Profile})
    } catch (error) {
        return dispatch({type:ActionTypes.GET_PROFILE_FAILURE, error})
    }
}