import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Image } from 'react-native';

/* Custom Navigation */

import {APPDARKGRAY, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'

import BCHIcon from '@Images/bch.png'
import BTCIcon from '@Images/btc.png'
import CYPIcon from '@Images/cyp.png'
import ETHIcon from '@Images/eth.png'
import LTCIcon from '@Images/ltc.png'

const iconArray = [
	CYPIcon,
	BTCIcon,
	ETHIcon,
	BCHIcon,
	LTCIcon,
]

// Map from route name to background color
const colorArray = [
    APPDARKGRAY,
    APPYELLOW,
    APPNAVY,
    APPGREEN,
    APPGRAY
]

// Custom tab bar
export default ({ navigation }) => {
    const { routes } = navigation.state;
    
    return (
	<View style={styles.tabContainer}>
	{routes.map((route, index) => (
	    <TouchableOpacity
			onPress={() => navigation.navigate(route.routeName)}
			style={{
			backgroundColor:colorArray[index],
			alignSelf: 'stretch',
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
			}}
			key={route.routeName}
	    >
			<Image 
				source={iconArray[index]}
				style={{width:"65%", height:"65%"}}
				resizeMode="contain"  />

	    </TouchableOpacity>)
	)}
	</View>
    )
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
      
  },
});
