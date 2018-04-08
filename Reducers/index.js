//The Root reducer. Combines all of our reducers together for a single export
import { combineReducers } from 'redux'
import auth from '@Reducers/auth.js'
import navigation from '@Reducers/navigation'
import stockGraph from '@Reducers/stockGraph.js'
import {coinbase, plaid} from '@Reducers/oauth.js'
import gdax from '@Reducers/gdax.js'
import balance from '@Reducers/balance.js'


export default combineReducers({
  auth,
  navigation,
  balance,
  stockGraph,
  coinbase,
  plaid,
  gdax
})
