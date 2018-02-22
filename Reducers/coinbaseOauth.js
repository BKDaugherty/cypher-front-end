import ActionTypes from '@Actions/ActionTypes'

const defaultState = {
    isComplete:false,
    token:''
}

export default function reducer(state = defaultState, action){
    switch(action.type){
	case ActionTypes.COINBASE_OAUTH_SUCCESS:
	    return Object.assign({}, state, {
		isComplete:true,
	    })
	default:
	    return state
    }
}
