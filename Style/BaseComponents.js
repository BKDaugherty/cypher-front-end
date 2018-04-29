import React from 'react'
import {Text, TextInput, TouchableOpacity} from 'react-native'
import { HEADERTEXTSIZE, BODYTEXTSIZE } from '@Style/constants';
export const CypherText = (props) => (<Text style={cypherTextStyle(props)}>{props.children}</Text>)

const cypherTextStyle = (props) => {
    let defaultSize = props.header ? HEADERTEXTSIZE : BODYTEXTSIZE
    const fontSuffix = props.bold ? '-bold' : (props.italic? '-italic' : '')

    return {
        color: props.color ? props.color : '#fff',
        fontSize:props.size ? props.size : defaultSize,
        fontFamily: (props.header ? 'pt-mono' : 'pt-sans') + fontSuffix,
        alignSelf: props.center ? 'center' : 'flex-start' 
    }
}

export const CypherTextInput = (props) => (
<TextInput style={cypherTextInputStyle(props)}
placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "#bbb"}
autoCapitalize={props.autoCapitalize? props.autoCapitalize : "none"}
autoCorrect={props.autoCorrect? props.autoCorrect : false}
{...props}>
{props.children}
</TextInput>
)

const cypherTextInputStyle = (props) => {

    const fontSuffix = props.bold ? '-bold' : (props.italic? '-italic' : '')
    if(fontSuffix == '-bold') console.log(fontSuffix)
    return {
        color: props.color? props.color : '#bbb',
        padding:10,
        margin:1,
        borderWidth:0.5,
        borderColor:'#fff',
        backgroundColor:'#fff',
        fontFamily: (props.header? 'pt-mono' : 'pt-sans') + fontSuffix,
        fontSize: props.header? HEADERTEXTSIZE : BODYTEXTSIZE,
        borderRadius: props.square ? 0 : 10,
        marginTop:15,
        padding:10
      }
    }

export const DrawerSlot = (props) => (
    <TouchableOpacity onPress={props.onPress}
    style={{
        backgroundColor:props.color,
        display:"flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    {props.children}</TouchableOpacity>
)
    