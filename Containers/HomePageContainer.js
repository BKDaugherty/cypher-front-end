import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import StockGraph from '@Components/StockGraph.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY} from '@Style/constants.js'


export default class HomePageContainer extends React.Component{

render() {
  return (
<View style={styles.container}>
  <View>
    <Text style={{color:'#fff'}}>Portfolio</Text>
  </View>

  <View style={styles.StockGraphView}>
    {/*<StockGraph data={[0,1,2,3]}/>*/}
  </View>

  <View style={styles.AppFooter}>
    <Text style={{color:'#fff'}}>Cypher Inc.</Text>
  </View>
</View>
);
}
}

const styles = StyleSheet.create({
  StockGraphView:{
    flex:1,
    paddingTop:5
  },
  container: {
    flex: 1,
    backgroundColor: APPDARKGRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppFooter:{
    flex:0.2,
    justifyContent:'center',
  },
});
