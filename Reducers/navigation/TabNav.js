import {SecureNavigator} from '@Navigation/TabNav'
import { NavigationActions } from 'react-navigation'
import * as Routes from "@Navigation/Routes" 
import ActionTypes from "@Actions/ActionTypes"

const TabNavigation = SecureNavigator

const initialState = TabNavigation.router.getStateForAction(TabNavigation.router.getActionForPathAndParams(Routes.Bitcoin))
export default tabNavReducer = (state = initialState, action) => {
  
    const newState = TabNavigation.router.getStateForAction(action, state)
    
    // return newState or previous state if newState is null
    return newState || state;
}