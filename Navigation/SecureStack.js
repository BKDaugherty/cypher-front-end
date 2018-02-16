import {DrawerNavigator} from 'react-navigation'
import HomePageContainer from '@Containers/HomePageContainer.js'
//import AccountPageContainer from '@Containers/AccountPageContainer.js'
//import forgotPasswordScreen from '@Navigation/Auth/forgotPasswordScreen.js'
import SettingsPageContainer from '@Containers/SettingsPageContainer.js'
import SideSecureMenuContainer from '@Containers/SideSecureMenuContainer.js'


//The Navigator for the secure portion of our app
export const SecureStack = DrawerNavigator(
    {
	HomePage: { screen: HomePageContainer },
	SettingsPage: { screen: SettingsPageContainer },
    },
    {
	//Adds a custom side menu defined
	//by my component
	contentComponent:SideSecureMenuContainer,
	headerMode: 'none',
	navigationOptions: {
	    headerStyle: {backgroundColor: '#E73536'},
	    headerTintColor: 'white'
	}
    })
