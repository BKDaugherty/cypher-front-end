import React from 'react';
import {StyleSheet, View} from 'react-native'
import StockGraph from '@Components/StockGraph'
import StockGraphStats from '@Components/StockGraphStats'
import StockGraphController from '@Components/StockGraphController'


export default class StockGraphContainer extends React.Component {
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
