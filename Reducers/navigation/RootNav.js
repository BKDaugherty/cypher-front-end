import RootNavigation from '@Navigation/RootNav'
import { NavigationActions } from 'react-navigation'
import * as Routes from "@Navigation/Routes" 
import ActionTypes from "@Actions/ActionTypes"

const initialState = RootNavigation.router.getStateForAction(RootNavigation.router.getActionForPathAndParams(Routes.AuthFlow))
export default rootNavReducer = (state = initialState, action) => {
  
    const newState = RootNavigation.router.getStateForAction(action, state)
    
    // return newState or previous state if newState is null
    return newState || state;
}