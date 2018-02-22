import {TabNavigator} from 'react-navigation'
import HomePageContainer from '@Containers/HomePageContainer.js'
//import AccountPageContainer from '@Containers/AccountPageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'
import SettingsPageContainer from '@Containers/SettingsPageContainer.js'
import CypherTabBar from '@Components/CypherTabBar.js'


//The Navigator for the secure portion of our app
export const SecureStack = TabNavigator(
    {
	HomePage: { screen: HomePageContainer },
	SettingsPage: {
	    screen: SettingsPageContainer,
	    tabBarOptions:{
		tabStyle:{
		    backgroundColor:'blue'
		}
	    }},
    },
    {
	tabBarComponent: CypherTabBar,
	tabBarPosition:'bottom'


    })
