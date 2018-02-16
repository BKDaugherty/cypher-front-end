import ActionTypes from '@Actions/ActionTypes'

//Default state
const defaultState = {
    isLoggedIn: false,
    username: 'TEST',
    token: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                token: action.token
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
