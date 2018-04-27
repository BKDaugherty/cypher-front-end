import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {CypherText} from '@Style/BaseComponents'


const StockGraphButton = (props) => {
  const {onPress, value, center, header} = props

  return (<TouchableOpacity onPress={() => onPress(value)}>
            <CypherText center={center} header={header}>{value}</CypherText>
          </TouchableOpacity>)
}

const timeScales = ["24HR", "1W", "1M", "3M", "1YR"]

const StockGraphController = (props) => (
    <View style={styles.ButtonView}>
      {timeScales.map(
        ts => (
        <StockGraphButton
          key={"STOCKGRAPHBUTTON" + ts}
          onPress={props.onPress}
          value={ts}/>))
      }
    </View>)

const styles = StyleSheet.create({
  ButtonView:{
    display:'flex',
    alignSelf:'stretch',
    justifyContent:"space-around",
    flexDirection:'row',
    paddingLeft:"10%",
    paddingRight:"10%"
  }
})


export default StockGraphController