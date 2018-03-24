import React from 'react';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {View, Text} from 'react-native'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'


export default (props) => {
    const {data} = props
    
    return (
      <View>
        <LineChart
        style={ {height:250, width:250, } }
          dataPoints={ data.map(elem => elem.open) }
          fillColor={ '#fff' }
          svg={{
              stroke: '#fff',
	        strokeWidth:'4'
          }}

          contentInset={ { top: 20, bottom: 20 } }
          curve={shape.curveLinear}
        />
      </View>
    )
}
