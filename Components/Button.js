import React from 'react'
import {StyleSheet, TouchableOpacity, View, ActivityIndicator} from 'react-native'
import {CypherText} from '@Style/BaseComponents'

const styles = StyleSheet.create({
    defaultButton:{
        backgroundColor:'#000',
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        padding:10,
        paddingLeft:15

    },
})

export default (props) => {
    const {children, style, error, pending, ...rest} = props
    //  if(error) console.log(error)
    return (
    <TouchableOpacity style={[styles.defaultButton, style]} {...rest}>
        <View>
        {pending && <ActivityIndicator size="small" color="#fff" animating={true}/>}
        {error && <CypherText center>{error}</CypherText>}
        {!error && !pending && children}
        </View>
    </TouchableOpacity>
)
}