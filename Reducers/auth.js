import ActionTypes from '@Actions/ActionTypes'

//Default state
const defaultState = {
    isLoggedIn: false,
    isSigningUp:false,
    isLoggingIn:false,
    username: 'TEST',
    token: '',
    signuperror:null,
    loginerror:null,
};

//This could all be much higher order... Decompose!
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.INITIATE_SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isSigningUp:true,
                signuperror:null
            });
        case ActionTypes.INITIATE_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLoggingIn:true,
                loginerror:null,
            });
        case ActionTypes.LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isLoggingIn: false,
                username: action.username,
                token: action.token,
                loginerror:null
            });
        case ActionTypes.LOGIN_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isLoggingIn:false,
                loginerror:action.error
            });
	    case ActionTypes.SIGNUP_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isSigningUp:false,
                signuperror:null
            });
        case ActionTypes.SIGNUP_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isSigningUp:false,
                signuperror:action.error
            });
        case ActionTypes.RESET_LOGIN:
            return Object.assign({}, state, {
            isLoggingIn:false,
            loginerror:null
        });
        case ActionTypes.RESET_SIGNUP:
            return Object.assign({}, state, {
            isSigningUp:false,
            signuperror:null
        });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, defaultState);
        default:
            return state;
    }
}
