import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';


const genCypherTabPage = (config) => {
    const styles = genStyles(config)
    return () => {
	return (
	    <View style={styles.container}>
	    <Text style={styles.header}>{config.title}</Text>
	    <Text style={styles.content}>{config.value}</Text>
	    <StockGraph />
	    <Text style={styles.footer}>{config.footer}</Text>
	    </View>
	)
    }
}

const genStyles = (config) => {
    return StyleSheet.create({
	container:{
	    flex:1,
	    backgroundColor: config.backgroundColor,
	    justifyContent: 'space-between',
	    alignItems:'center',
	    paddingTop:'10%',
	    paddingBottom:'15%'
	    
	},
	header:{
	    color:'#fff',
	    fontSize:24,
	    fontFamily:'pt-mono'
	},
	content:{
	    color:'#fff',
	    fontSize:32,
	    fontFamily:'pt-mono'
	},
	footer:{
	    color:'#fff',
	    fontSize:32,
	    fontFamily:'pt-mono'
	},
	
    })
}

import {APPDARK, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'

export const BitcoinContainer = genCypherTabPage({
    backgroundColor:APPYELLOW,
    value:'$8000',
    footer:'Balance:',
    title:'Bitcoin',

})

export const EthereumContainer = genCypherTabPage({
    backgroundColor:APPGREEN,
    value:'$8000',
    footer:'Balance:',
    title:'Ethereum',
})

export const BitcoinCashContainer = genCypherTabPage({
    backgroundColor:APPNAVY,
    value:'$8000',
    footer:'Balance:',
    title:'Bitcoin Cash',

})

export const LitecoinContainer = genCypherTabPage({
    backgroundColor:APPGRAY,
    value:'$8000',
    footer:'Balance:',
    title:'Litecoin',

})
