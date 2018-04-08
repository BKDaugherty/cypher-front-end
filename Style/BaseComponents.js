import React from 'react'
import {Text} from 'react-native'
export const CypherText = (props) => (<Text style={cypherTextStyle(props)}>{props.children}</Text>)

const cypherTextStyle = (props) => ({
    color:'#fff',
    fontSize:16,
    fontFamily:'pt-mono'
})