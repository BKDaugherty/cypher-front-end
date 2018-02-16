import React from 'react'
import {StyleSheet, Text,  View, TouchableHighlight} from 'react-native'
import {Icon } from 'react-native-elements'


export const SideDrawerHeader = ({title}) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {title}
      </Text>
    </View>
)
    
export const SideDrawerComponent = ({label, onPress, iconProps}) => (
    <TouchableHighlight onPress={onPress}>
    <View style={styles.entry}>
    <Icon {...iconProps}/>
    <Text style={styles.labelText}>{label}</Text>
    </View>
    </TouchableHighlight>

)

const styles = StyleSheet.create({
    entry:{
	display:'flex',
	flexDirection:'row',
	alignItems:'center',
	justifyContent:'center',
    },
    labelText:{
	color:'white',
	fontSize:20
    },
    header:{
	display:'flex',
	flexDirection:'row',
	alignItems:'center',
	justifyContent:'center',
	paddingTop:10,
	paddingBottom:10
    },
    headerText:{
	color:'white',
	fontSize:26
    }
})
