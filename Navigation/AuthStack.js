import {StackNavigator} from 'react-navigation'
import AuthPageContainer from '@Containers/AuthPageContainer.js'
import SignUpPageContainer from '@Containers/SignUpPageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'

export const AuthStack = StackNavigator({
    loginScreen: { screen: AuthPageContainer },
    signUpScreen:{ screen: SignUpPageContainer},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {backgroundColor: '#E73536'},
      title: 'You are not logged in',
      headerTintColor: 'white',
    }
  })
