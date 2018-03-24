//Create a family of actions for each page... Should essentially all be the same.
import ActionTypes from '@Actions/ActionTypes'
import {getHistoricRates} from '@Data/GDAX'
const genGDAXActions = function(coin){
    return {
        initiateRequest:(granularity) => {
            return async (dispatch) => {
                //Signal to the store that we have started the request
                dispatch({type:coin + ActionTypes.INITIATE_GDAX_REQUEST})
                //Make the request
                try{
                    const historicRates = await getHistoricRates(coin, granularity)
                    //Dispatch a success to populate the store with the historic rates
                    dispatch({type:coin + ActionTypes.GDAX_REQUEST_SUCCESS, historicRates})
                }
                catch(error){
                    console.error(error)
                    //Dispatch the error to tell the store the request failed..
                    dispatch({type:coin + ActionTypes.GDAX_REQUEST_FAILURE})
                }
            }
        },
    }
}

export default {
    bitcoin:genGDAXActions('BITCOIN'),
    ethereum:genGDAXActions('ETHEREUM'),
    litecoin:genGDAXActions('LITECOIN'),
    bitcoincash:genGDAXActions('BITCOINCASH')
}