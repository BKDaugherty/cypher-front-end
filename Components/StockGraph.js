import React from 'react';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {View, Text} from 'react-native'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'


export default class StockGraph extends React.Component {
  render() {
    const data = [ 5, 10, 30, 40, 50, 75,65, 85,95, 92, 111]
    return (
      <View>
        <LineChart
        style={ {height:250, width:250, } }
          dataPoints={ data }
          fillColor={ '#fff' }
          svg={{
              stroke: '#fff',
	      strokeWidth:'4'
          }}

          contentInset={ { top: 20, bottom: 20 } }
          curve={shape.curveLinear}
        />
      </View>
    );
  }
}
