//The Root reducer. Combines all of our reducers together for a single export
import { combineReducers } from 'redux'
import auth from '@Reducers/auth.js'
import nav from '@Reducers/nav.js'
import stockGraph from '@Reducers/stockGraph.js'
import {coinbase, plaid} from '@Reducers/oauth.js'



export default combineReducers({
  auth,
  nav,
  stockGraph,
  coinbase,
  plaid
})
