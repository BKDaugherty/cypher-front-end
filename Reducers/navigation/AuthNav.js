import AuthNavigation from '@Navigation/AuthNav'
import { NavigationActions } from 'react-navigation'
import * as Routes from "@Navigation/Routes" 
import ActionTypes from "@Actions/ActionTypes"


const initialState = AuthNavigation.router.getStateForAction(AuthNavigation.router.getActionForPathAndParams(Routes.Login))
export default authNavReducer = (state = initialState, action) => {
  
    const newState = AuthNavigation.router.getStateForAction(action, state)
    
    // return newState or previous state if newState is null
    return newState || state;
}