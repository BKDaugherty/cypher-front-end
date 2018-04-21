import React from 'react'
import {StyleSheet, View, TextInput} from 'react-native'
import { Icon, Input } from 'react-native-elements';

const styles = StyleSheet.create

export default (props) => (
    <View style={styles.inputContainer}>  
        <Icon name={props.iconName}
        <TextInput style={styles.input}
    </View>
)



color:'#fff',
    padding:10,
    margin:1,
    borderWidth:0.5,
    borderColor:'#fff',
    fontFamily:'pt-mono'