import ActionTypes from '@Actions/ActionTypes'

//Default state
const defaultState = {
    isLoggedIn: false,
    isSigningUp:false,
    isLoggingIn:false,
    username: 'TEST',
    token: '',
    error:null,
};

//This could all be much higher order... Decompose!
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.INITIATE_SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isSigningUp:true
            });
        case ActionTypes.INITIATE_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLoggingIn:true,
                error:null,
            });
        case ActionTypes.LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isLoggingIn: false,
                username: action.username,
                token: action.token,
                error:null
            });
        case ActionTypes.LOGIN_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isLoggingIn:false,
                error:action.error
            });
	    case ActionTypes.SIGNUP_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isSigningUp:false
            });
        case ActionTypes.SIGNUP_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isSigningUp:false
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                token: ''
            });
        default:
            return state;
    }
}
