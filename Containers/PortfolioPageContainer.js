import React from 'react';
import {RefreshControl, ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'

import {connect} from 'react-redux'
import { CypherText } from '../Style/BaseComponents';
import { PieChart } from 'react-native-svg-charts'

const PortfolioPageContainer = (props) => {

const {bitcoin, ethereum, litecoin, bitcoincash} = props
const coinData = [bitcoin, ethereum, litecoin, bitcoincash]
const coinColor = [APPYELLOW, APPGREEN, APPNAVY, APPGRAY]
const mappedPieData = coinData.filter(value => value > 0).map((value, idx) => ({value, svg:{fill:coinColor[idx]}, key: `pie-${idx}`}))

const pieData = mappedPieData.length == 0 ? [{value:1, svg:{fill:"#666"}, key:`pie-empty`}] : mappedPieData


  return (
      <ScrollView style={{backgroundColor:APPDARKGRAY}} contentContainerStyle={styles.container}
      refreshControl={<RefreshControl 
				refreshing={props.pending}
				onRefresh={() => { props.pending = true}}
				colors={["white"]}
				style={{backgroundColor:APPDARKGRAY}}/>}>
      <View style={styles.header}>
        <CypherText center bold header>Portfolio</CypherText>
      </View>

      
      <View style={styles.StockGraphView}>
        <PieChart style={{height:300, width:200}} data={pieData}/>
      </View>
    
    
      <View style={styles.BalanceContainer}>

        <CypherText center>Bitcoin: {props.btc} BTC</CypherText>
        <CypherText center>Ethereum: {props.eth} ETH</CypherText>
        <CypherText center>Litecoin: {props.ltc} LTC</CypherText>
        <CypherText center>Bitcoin Cash: {props.bch} BCH </CypherText>

        <CypherText center>
          {(typeof(props.roundups) == "number" ) ? `Pending Roundups: $${props.roundups.toFixed(2)}`: null}
        </CypherText> 
      </View>

      <View style={styles.AppFooter}>
        <Text style={{color:'#fff'}}>Cypher App LLC</Text>
      </View>
      </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  bitcoinPriceData:state.gdax.bitcoin.data,
  ethereumPriceData:state.gdax.ethereum.data,
  litecoinPriceData:state.gdax.bitcoin.data,
  bitcoinCashPriceData:state.gdax.bitcoincash.data,
  roundups:state.balance.balances.usd,
  btc:state.balance.balances.bitcoin,
  eth:state.balance.balances.ethereum,
  ltc:state.balance.balances.litecoin,
  bch:state.balance.balances.bitcoincash,
  pending:false
})


export default connect(mapStateToProps)(PortfolioPageContainer)

const styles = StyleSheet.create({
  StockGraphView:{
    alignItems:'center',
		justifyContent:'space-between'
  },
  container: {
    flex:1,
		backgroundColor:APPDARKGRAY,
	  justifyContent: 'space-between',
	  alignItems:'center',
	    paddingTop:'10%',
	    paddingBottom:'15%'
  },
  AppFooter:{
    flex:1,
    marginBottom:5
  },
  Header:{
   paddingBottom:"20%"
  },
  Balance:{
    fontSize:32,
    color:'#fff',
    fontFamily:'pt-mono'
  },
  BalanceView:{

  }
});
