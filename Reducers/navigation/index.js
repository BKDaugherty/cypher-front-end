import * as Routes from "@Navigation/Routes" 
import ActionTypes from "@Actions/ActionTypes"
//Get Navigation Actions for different states of app

import {combineReducers} from 'redux'

//Get Navigation Reducers
import TabNav from './TabNav'
import AuthNav from './AuthNav'
import RootNav from './RootNav'


export default combineReducers({
  authNav:AuthNav,
  rootNav:RootNav,
  tabNav:TabNav,
})



// const RouteActions = ObjectMap(Routes,
//   AppNavigation.router.getActionForPathAndParams)

//   console.log(RouteActions)

// //Initial State should be Splash Screen!
// //const initialAction = AppNavigation.routeer.getActionForPathAndParams(Routes.SplashScreen)
// //const initialNavState = AppNavigation.router.getStateForAction(RouteActions.SplashScreen);

// const stateForLoggedOut = AppNavigation.router.getStateForAction(RouteActions.LoginScreen)
// const stateForLoggedIn = AppNavigation.router.getStateForAction(RouteActions.MainApp)
// const initialState = { stateForLoggedOut, stateForLoggedIn };
// export default (state = initialState, action) => {

//   switch(action.type){
//     case "@@redux/INIT":
//     return {
//       ...state,
//       stateForLoggedIn: AppNavigation.router.getStateForAction(
//         RouteActions.LoginScren,
//         stateForLoggedOut
//       )
//     }
//     case ActionTypes.LOGIN_REQUEST_SUCCESS:
//       return {
//         ...state,
//         stateForLoggedIn:AppNavigation.router.getStateForAction(RouteActions.PortfolioScreen,
//         stateForLoggedOut)
//       }
//     case ActionTypes.LOGOUT:
//     return {...state, 
//       stateForLoggedIn, 
//       stateForLoggedOut
//     }

//     default:
//       return {
//         ...state,
//         stateForLoggedIn:AppNavigation.router.getStateForAction(
//           action,
//           state.stateForLoggedIn
//         )
//       }
//   }

//   const newState = AppNavigation.router.getStateForAction(action, state)
//   return newState || state
// }
