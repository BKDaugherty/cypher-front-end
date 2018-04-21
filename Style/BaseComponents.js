import React from 'react'
import {Text, TextInput} from 'react-native'
import { HEADERTEXTSIZE, BODYTEXTSIZE } from '@Style/constants';
export const CypherText = (props) => (<Text style={cypherTextStyle(props)}>{props.children}</Text>)

const cypherTextStyle = (props) => {
    let defaultSize = props.header ? HEADERTEXTSIZE : BODYTEXTSIZE

    return {
        color: props.color ? props.color : '#fff',
        fontSize:props.size ? props.size : defaultSize,
        fontFamily: props.header ? 'pt-mono' : 'pt-sans',
        alignSelf: props.center ? 'center' : 'flex-start' 
    }
}

export const CypherTextInput = (props) => (
<TextInput style={cypherTextInputStyle(props)}
placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "#fff"}
autoCapitalize={props.autoCapitalize? props.autoCapitalize : "none"}
autoCorrect={props.autoCorrect? props.autoCorrect : false}
{...props}>
{props.children}
</TextInput>
)

const cypherTextInputStyle = (props) => {
    return {
        color: props.color? props.color : '#fff',
        padding:10,
        margin:1,
        borderWidth:0.5,
        borderColor:'#fff',
        fontFamily: props.header? 'pt-mono' : 'pt-sans',
        fontSize: props.header? HEADERTEXTSIZE : BODYTEXTSIZE,
        borderRadius: props.square ? 0 : 20,
        marginTop:15,
        padding:10
      }
    }