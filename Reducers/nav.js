import {RootNavigator} from '@Navigation/RootNav'
import { NavigationActions } from 'react-navigation'
import * as Routes from "@Navigation/Routes" 
import ActionTypes from "@Actions/ActionTypes"
import { initAction } from 'react-navigation-redux-helpers/src/reducer';


const initialAction = RootNavigator.router.getActionForPathAndParams(Routes.AuthFlow)
console.log(RootNavigator.router)
// const initialState = RootNavigator.router.getStateForAction(initialAction)

// export default reducer = (state = initialState, action) => {
  
//     const newState = RootNavigator.router.getStateForAction(action, state)
    
//     // return newState or previous state if newState is null
//     return newState || state;
// }

export default reducer = (state, action) => {
    return RootNavigator.router.getStateForAction(action,state) || state
}