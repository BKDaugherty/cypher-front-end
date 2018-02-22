import ActionTypes from '@Actions/ActionTypes'

const defaultState = {
    isComplete:false,
}

//Higher order reducer for OAUTH
const createReducer = (OAUTH_SUCCESS) => {
    return (state = defaultState, action) => {
	if(action.type == OAUTH_SUCCESS){
	    return Object.assign({}, state, {
		isComplete:true,
	    })
	} else {
	    return state
	}
    }
}

export const coinbase = createReducer(ActionTypes.COINBASE_OAUTH_SUCCESS)
export const plaid = createReducer(ActionTypes.PLAID_OAUTH_SUCCESS)
