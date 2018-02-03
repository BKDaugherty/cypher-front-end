import {DrawerNavigator} from 'react-navigation'
import HomePageContainer from '@Containers/HomePageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'

export const SecureStack = DrawerNavigator({
  HomePage: { screen: HomePageContainer },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    headerTintColor: 'white'
  }
})
