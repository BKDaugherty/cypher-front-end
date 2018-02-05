import {DrawerNavigator} from 'react-navigation'
import HomePageContainer from '@Containers/HomePageContainer.js'
//import AccountPageContainer from '@Containers/AccountPageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'

export const SecureStack = DrawerNavigator({
  HomePage: { screen: HomePageContainer },
  //AccountPage: {screen:AccountPageContainer},
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    headerTintColor: 'white'
  }
})
