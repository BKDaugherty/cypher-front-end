import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY} from '@Style/constants.js'
import {connect} from 'react-redux'

const PortfolioPageContainer = (props) => {

const {bitcoinPriceData, ethereumPriceData, litecoinPriceData, bitcoinCashPriceData} = props

  return (
    <SafeAreaView style={styles.container}>
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
      

      <Text style={styles.Balance}>
        Balance: {props.balance}
      </Text> 
      
      <View style={styles.AppFooter}>
        <Text style={{color:'#fff'}}>Cypher Inc.</Text>
      </View>
      
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  bitcoinPriceData:state.gdax.bitcoin.data,
  ethereumPriceData:state.gdax.ethereum.data,
  litecoinPriceData:state.gdax.bitcoin.data,
  bitcoinCashPriceData:state.gdax.bitcoincash.data,
  balance:state.balance.balances.usd
})


export default connect(mapStateToProps)(PortfolioPageContainer)

const styles = StyleSheet.create({
  StockGraphView:{
    flex:1,
  },
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: APPDARKGRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:20,
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
    fontSize:24,
    color:'#fff',
    fontFamily:'pt-mono'
  }
});
