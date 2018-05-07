import ActionTypes from '@Actions/ActionTypes'

//Default state
const defaultState = {
    isLoggedIn: false,
    isSigningUp:false,
    isLoggingIn:false,
    email: '',
    access_token: '',
    refresh_token:'',
    signuperror:null,
    loginerror:null,
};

//This could all be much higher order... Decompose!
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.INITIATE_SIGNUP_REQUEST:
            return Object.assign({}, state, {
                ...defaultState,
                isSigningUp:true,
            });
        case ActionTypes.INITIATE_LOGIN_REQUEST:
            return Object.assign({}, state, {
                ...defaultState,
                isLoggingIn:true
            });
        case ActionTypes.LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                email: action.email,
                access_token: action.access_token,
                refresh_token:action.refresh_token,
                loginerror:null,
            });
        case ActionTypes.LOGIN_REQUEST_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isLoggingIn:false,
                loginerror:action.error,
            });
        case ActionTypes.INITIATE_LOGIN_REFRESH_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isLoggingIn:true,
                access_token:'',
            });
	    case ActionTypes.SIGNUP_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isSigningUp:false,
                signuperror:null,
            });
        case ActionTypes.SIGNUP_REQUEST_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isSigningUp:false,
                signuperror:action.error,
            });
        case ActionTypes.RESET_LOGIN:
            return Object.assign({}, state, {
            ...state,
            loginerror:null,
        });
        case ActionTypes.RESET_SIGNUP:
            return Object.assign({}, state, {
            ...state,
            signuperror:null,
        });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, defaultState);
        default:
            return state;
    }
}
