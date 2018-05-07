import React from 'react';
import {RefreshControl, ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'

import {connect} from 'react-redux'
import { CypherText } from '../Style/BaseComponents';
import { PieChart } from 'react-native-svg-charts'

const PortfolioPageContainer = (props) => {

const {bitcoinPriceData, ethereumPriceData, litecoinPriceData, bitcoinCashPriceData} = props
const coinData = [1, ethereumPriceData, litecoinPriceData, bitcoinCashPriceData]
const coinColor = [APPYELLOW, APPGREEN, APPNAVY, APPGRAY]
const pieData = coinData.filter(value => value > 0)
  .map((value, idx) => ({value, color:coinColor[idx], svg:{fill:coinColor[idx]}, key: `pie-${idx}`}))


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}
      refreshControl={<RefreshControl 
				refreshing={props.pending}
				onRefresh={() => { props.pending = true}}
				colors={["white"]}
				style={{backgroundColor:APPDARKGRAY}}/>}>
      <View>
        <CypherText center bold header>Portfolio</CypherText>
      </View>

    {/*Currently block until we raise state back a bit*/}
    {bitcoinPriceData && ethereumPriceData && litecoinPriceData && bitcoinCashPriceData &&
      (
        <View style={styles.StockGraphView}>
          <PieChart style={{height:300}} data={pieData}/>
        </View>
      )
    }
      <View style={styles.BalanceContainer}>
        <CypherText center>
          Pending Roundups: ${props.balance.toFixed(2)}
        </CypherText> 
      </View>

      <View style={styles.AppFooter}>
        <Text style={{color:'#fff'}}>Cypher App LLC</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  bitcoinPriceData:state.gdax.bitcoin.data,
  ethereumPriceData:state.gdax.ethereum.data,
  litecoinPriceData:state.gdax.bitcoin.data,
  bitcoinCashPriceData:state.gdax.bitcoincash.data,
  balance:state.balance.balances.usd,
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
    fontSize:32,
    color:'#fff',
    fontFamily:'pt-mono'
  },
  Balance:{
    fontSize:32,
    color:'#fff',
    fontFamily:'pt-mono'
  },
  BalanceView:{

  }
});
