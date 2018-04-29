import ActionTypes from '@Actions/ActionTypes'

//Default state
const defaultState = {
    isPending: false,
    balances:{
        bitcoin:0,
        ethereum:0,
        bitcoincash:0,
        litecoin:0,
        usd:0
    },
    error:null
};

export default function reducer(state = defaultState, action) {
    switch(action.type){
        case ActionTypes.INITIATE_BALANCE_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isPending:true,
                error:null
            });
        case ActionTypes.BALANCE_REQUEST_SUCCESS:
            return Object.assign({},state, {
                ...state,
                isPending:false,
                balances:action.balances,
                error:null
            })
        case ActionTypes.BALANCE_REQUEST_FAILURE:
            return Object.assign({},state, {
                ...state,
                isPending:false,
                error:action.error,
            })
        default:
            return state
    }
}
