import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class StockGraphStats extends React.Component {
  render() {
    return (
    <View style={styles.statsView}>
      <Text style={styles.smallText}>$<Text style={styles.bigText}>3.141</Text>.59</Text>
      <Text style={styles.smallGreenText}>+$892 (30%) <Text style={styles.smallGrayText}>1M</Text></Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  statsView:{
    justifyContent:'center'
  },
  bigText: {
    color:'#000',
    fontSize:80
  },
  smallGreenText:{
    color:'#0f0',
    fontSize:18,
    textAlign:'center'
  },
  smallGrayText:{
    color:'#ddd',
    fontSize:18,
    textAlign:'center'
  },
  smallText:{
    color:'#000',
    fontSize:18
  }
});
