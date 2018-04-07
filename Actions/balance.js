import CypherAPI from '@Data/CypherAPI/index.js'
import ActionTypes from '@Actions/ActionTypes.js'

export const getBalance = (access_token, coinName) => {
    return async (dispatch) => {
        console.log("Getting balance")
        //const coinBalances = await CypherAPI.getBalance(access_token, coinName)
        //console.log(coinBalances)
    }
}