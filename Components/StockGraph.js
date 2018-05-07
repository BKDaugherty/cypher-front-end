import React from 'react';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {View, Text} from 'react-native'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'

import * as scale from 'd3-scale'

export default (props) => {
    const {data, ...rest} = props
    
    return (
      <View>
        <LineChart
        style={ {height:250, width:250, } }
          data={ data.map(elem => elem.open) }
          fillColor={ '#fff' }
          svg={{
              stroke: '#fff',
	        strokeWidth:'4'
          }}
          animate={false}
          showGrid={false}
          contentInset={ { top: 20, bottom: 20 } }
          curve={shape.curveNatural}
          {...rest}
        />
      </View>
    )
}
