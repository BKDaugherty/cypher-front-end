import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';

/* Custom Navigation */

import {APPDARKGRAY, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'

//Map from route name to background color

const colorArray = [
    APPDARKGRAY,
    APPYELLOW,
    APPNAVY,
    APPGREEN,
    APPGRAY
]

//Custom tab bar
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
