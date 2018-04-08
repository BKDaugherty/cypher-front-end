import ActionTypes from '@Actions/ActionTypes'

const defaultState = {
	isComplete:false,
	error:null
}

//Higher order reducer for OAUTH
const createReducer = (OAUTH_SUCCESS, OAUTH_FAILURE) => {
    return (state = defaultState, action) => {
		if(action.type == OAUTH_SUCCESS){
			return Object.assign({}, state, {
				isComplete:true,
			})
		} else if (action.type == OAUTH_FAILURE){
			return Object.assign({}, state, {
				isComplete:false,
				error:action.error
			})
		} else {
			return state
		}
    }
}

export const coinbase = createReducer(ActionTypes.COINBASE_OAUTH_SUCCESS, ActionTypes.COINBASE_OAUTH_FAILURE)
export const plaid = createReducer(ActionTypes.PLAID_OAUTH_SUCCESS, ActionTypes.PLAID_OAUTH_FAILURE)
