
import { StackNavigator } from 'react-navigation'
import {AuthStack} from '@Navigation/AuthStack'
import {SecureStack} from '@Navigation/SecureStack'
// Manifest of all possible screens
const PrimaryNav = StackNavigator({
  AuthStack: { screen: AuthStack },
  SecureStack: {screen: SecureStack},
}, {
  // Default config for all screens
  title:'Main',
  headerMode: 'none',
  initialRouteName: 'AuthStack'
})

export default PrimaryNav
