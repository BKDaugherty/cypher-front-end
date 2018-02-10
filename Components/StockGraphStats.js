import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, Text} from 'react-native'


class StockGraphStats extends React.Component {
  render() {
    return (
    <View style={styles.statsView}>
      <Text style={styles.smallText}>$<Text style={styles.bigText}>3.141</Text>.59</Text>
      <Text style={styles.smallGreenText}>+$892 (30%) <Text style={styles.smallGrayText}>{this.props.stockGraphTimeScale}</Text></Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  statsView:{
    justifyContent:'center'
  },
  bigText: {
    color:'#fff',
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
    color:'#fff',
    fontSize:18
  }
});

const mapStateToProps = (state, ownProps) => {
    return {
        stockGraphTimeScale: state.stockGraph.stockGraphTimeScale
    };
}

export default connect(mapStateToProps)(StockGraphStats);
