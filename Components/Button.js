import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const styles = StyleSheet.create({
    defaultButton:{
        backgroundColor:'#000',
        borderRadius:20,
        display:'flex',
        padding:10,
    },
    defaultText:{
        color:'#fff',
        fontFamily:'pt-mono',
        alignSelf:'center',
        fontSize:24

    }
})

export default (props) => {
    const {children, style, textStyle, textContent, customContent, ...rest} = props
     
    return (
    <TouchableOpacity style={[styles.defaultButton, style]} {...rest}>
        {customContent ? 
        customContent() :
        (<Text style={[styles.defaultText, textStyle]}>
                {textContent}
        </Text>)}
    </TouchableOpacity>
)
}