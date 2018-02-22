import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native'
import { setTimeScale } from '@Actions/stockGraph.js'
import StockGraph from '@Components/StockGraph'
import StockGraphStats from '@Components/StockGraphStats'
import StockGraphController from '@Components/StockGraphController'


//Make a request in constructor for stats

class StockGraphContainer extends React.Component {

  render() {
    return (
    <View style={styles.StatusViewContainer}>
      <StockGraphStats/>
      <StockGraph/>
      <StockGraphController/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  StatusViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockGraphContainer)
