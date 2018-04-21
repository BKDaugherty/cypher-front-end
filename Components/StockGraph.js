import React from 'react';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {View, Text} from 'react-native'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'

import * as scale from 'd3-scale'

export default (props) => {
    const {data, ...rest} = props
    
    console.log(scale.scaleLinear().domain([299,0]))

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
          animate={false}
          showGrid={false}
          xScale={scale.scaleLinear().range([300,0])}

          contentInset={ { top: 20, bottom: 20 } }
          curve={shape.curveNatural}
          {...rest}
        />
      </View>
    )
}
