/**
 * Reducer for Profile of Cypher User
 */

import ActionTypes from '@Actions/ActionTypes'

// Define the state if 
// undefined is passed
// to reducer
const defaultState = {
    isPending: false,
    first_name:'',
    last_name:'',
    email:'',
    error:null
};

export default function reducer(state = defaultState, action) {
    switch(action.type){
        case ActionTypes.INITIATE_GET_PROFILE_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isPending:true,
                error:null
            });
        case ActionTypes.GET_PROFILE_SUCCESS:
            return Object.assign({},state, {
                ...state,
                isPending:false,
                first_name:action.first_name,
                last_name:action.last_name,
                email:action.email,
                error:null
            })
        case ActionTypes.GET_PROFILE_FAILURE:
            return Object.assign({},state, {
                ...state,
                isPending:false,
                error:action.error,
            })
        default:
            return state
    }
}
