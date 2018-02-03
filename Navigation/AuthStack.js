import {StackNavigator} from 'react-navigation'
import AuthPageContainer from '@Containers/AuthPageContainer.js'
//import SignupPageContainer from '@Containers/SignUpPageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'

export const AuthStack = StackNavigator({
    loginScreen: { screen: AuthPageContainer },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {backgroundColor: '#E73536'},
      title: 'You are not logged in',
      headerTintColor: 'white',
    }
  })
