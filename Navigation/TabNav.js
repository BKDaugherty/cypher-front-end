/* Secure Navigation */

import SettingsPageContainer from '@Containers/SettingsPageContainer'

//Import Routes
import {BitcoinTab, 
		EthereumTab, 
		BitcoinCashTab, 
		PortfolioTab, 
		LitecoinTab} from '@Navigation/Routes'

import CustomTabBar from '@Components/CustomTabBar'

import {
	BitcoinContainer,
	EthereumContainer,
	BitcoinCashContainer,
	LitecoinContainer,
	} from '@Containers/CypherTabPage'


const SecureNavigatorOptions = {
	borderTopColor:'transparent',
	tabBarComponent:CustomTabBar,
	tabBarPosition:'bottom',
	swipeEnabled:true,
	animationEnabled:true,
	//Lazy should be true... But there seems to be a bug?
	//https://github.com/react-navigation/react-navigation/issues/1627
	//Setting to false causes the App to be synchronous and is not a good 
	//call!!!
	lazy:false,
}

const SecureNavigatorRoutes = {
	[PortfolioTab]:{screen:SettingsPageContainer}, 
	[BitcoinTab]: {screen:BitcoinContainer },
	[EthereumTab]: { screen:EthereumContainer  },
	[BitcoinCashTab]: { screen: BitcoinCashContainer },
	[LitecoinTab]: { screen: LitecoinContainer },
}

//The Navigator for the secure portion of our app
export const SecureNav = 
	TabNavigator(SecureNavigatorRoutes,SecureNavigatorOptions)

/* End Secure Navigation */