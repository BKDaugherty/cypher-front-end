import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import {TabNavigator} from 'react-navigation'
import HomePageContainer from '@Containers/HomePageContainer'
import SettingsPageContainer from '@Containers/SettingsPageContainer'

import CustomTabBar from '@Components/CustomTabBar'

import {BitcoinContainer,
	EthereumContainer,
	BitcoinCashContainer,
	LitecoinContainer,
	} from '@Containers/CypherTabPage'


//The Navigator for the secure portion of our app
export const SecureStack = TabNavigator(
    {
	HomePage: { screen: SettingsPageContainer },
	Bitcoin: {screen:BitcoinContainer },
	Ethereum: { screen:EthereumContainer  },
	BitcoinCash: { screen: BitcoinCashContainer },
	Litecoin: { screen: LitecoinContainer },
    },
    {
	borderTopColor:'transparent',
	tabBarComponent:CustomTabBar,
	tabBarPosition:'bottom',
	swipeEnabled:true,
	animationEnabled:true,
    })


