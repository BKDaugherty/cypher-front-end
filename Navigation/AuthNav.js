/* Auth navigation */
import AuthPageContainer from '@Containers/AuthPageContainer.js'
import SignUpPageContainer from '@Containers/SignUpPageContainer.js'

import {addListener} from './reduxMiddleware'

const AuthNav = StackNavigator({
  [LoginScreen]: { screen: AuthPageContainer },
  [SignUpScreen]:{ screen: SignUpPageContainer},
})
