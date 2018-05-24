import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

export const getBalance = (access_token, coinName) => {
    return async (dispatch, getState) => {
        //If we are already waiting on a response, don't send another
        if(getState().balance.isPending){
            return 
        } else {
            dispatch({type: ActionTypes.INITIATE_BALANCE_REQUEST})
            try {
                const response = await CypherAPI.getBalance(access_token, coinName)
                const balances = {
                    bitcoin:response.btc,
                    bitcoincash:response.bch,
                    ethereum:response.eth,
                    litecoin:response.ltc,
                    usd:response.usd ? response.usd : 0
                }

                dispatch({type:ActionTypes.BALANCE_REQUEST_SUCCESS, balances})
            }
            catch (error) {
                dispatch({type:ActionTypes.BALANCE_REQUEST_FAILURE, error})
            }
        }
    }
}

export const getBalanceSuccess = () =>{
    
}