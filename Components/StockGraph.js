import React from 'react';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {View, Text} from 'react-native'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'


export default class StockGraph extends React.Component {
  render() {
    const data = [ 5, 10, 15, 30, 50, 75, 85, 91, 35, 120, 150]
    return (
      <View>
        <LineChart
          style={ {height:250, width:250, } }
          dataPoints={ data }
          fillColor={ 'blue' }
          shadowOffset={3}
          svg={{
            stroke: APPPURPLE,
          }}
          shadowSvg={{
            stroke: 'rgba(134, 65, 244, 0.2)',
            strokeWidth: 5,
          }}
          contentInset={ { top: 20, bottom: 20 } }
          curve={shape.curveLinear}
        />
      </View>
    );
  }
}
