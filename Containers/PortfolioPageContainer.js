import React from 'react';
import {RefreshControl, ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY} from '@Style/constants.js'
import {connect} from 'react-redux'

const PortfolioPageContainer = (props) => {

const {bitcoinPriceData, ethereumPriceData, litecoinPriceData, bitcoinCashPriceData} = props

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}
      refreshControl={<RefreshControl 
				refreshing={props.pending}
				onRefresh={() => { props.pending = true}}
				colors={["white"]}
				style={{backgroundColor:APPDARKGRAY}}/>}>
      <View>
        <Text style={styles.Header}>Portfolio</Text>
      </View>

    {/*Currently block until we raise state back a bit*/}
    {bitcoinPriceData && ethereumPriceData && litecoinPriceData && bitcoinCashPriceData &&
      (
        <View style={styles.StockGraphView}>
          <StockGraph data={bitcoinPriceData}/>
        </View>
      )
    }
      

      <View style={styles.BalanceContainer}>
        <Text style={styles.Balance}>
          Balance: {props.balance}
        </Text> 
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
