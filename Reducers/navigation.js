
import {AppNavigator} from '@Navigation/AppNavigation'
import {NavigationActions} from 'react-navigation'

const intialAction = {type: NavigationActions.INIT}
const initialState = AppNavigator.router.getStateForAction(intialAction)

export default (state = initialState, action) => {
    return AppNavigator.router.getStateForAction(action,state)
}