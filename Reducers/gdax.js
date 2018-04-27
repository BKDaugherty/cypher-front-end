import {combineReducers} from 'redux'
import ActionTypes from '@Actions/ActionTypes'

function curriedReducer(coin){
    const defaultState = {
        isPending:false,
        data:[],
        error:null,
        currentPrice:0
    }

    return (state = defaultState, action) => {
        switch(action.type){
            case coin + ActionTypes.INITIATE_GDAX_REQUEST:
                return Object.assign({}, state, {
                    isPending:true,
                    error:null,
                });
            case coin + ActionTypes.GDAX_REQUEST_SUCCESS:
                return Object.assign({},state, {
                    isPending:false,
                    data:action.historicRates,
                    currentPrice:action.currentPrice,
                    error:null
                })
            case coin + ActionTypes.GDAX_REQUEST_FAILURE:
                return Object.assign({},state, {
                    isPending:false,
                    error:action.error,
                })
            default:
                return state
        }
    }
}

export default combineReducers({
    bitcoin:curriedReducer("BITCOIN"),
    ethereum:curriedReducer("ETHEREUM"),
    litecoin:curriedReducer("LITECOIN"),
    bitcoincash:curriedReducer("BITCOINCASH")
})

