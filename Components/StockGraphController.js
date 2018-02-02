import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native'

const onPressSetWeekValue = (weekValue) => {
  return () => {
    console.log(weekValue)
  }
}

export default class StockGraphController extends React.Component {
  render() {
    return (
    <View style={styles.ButtonView}>
      <Button onPress={onPressSetWeekValue('24HR')} title="24HR"/>
      <Button onPress={onPressSetWeekValue('1W')} title="1W"/>
      <Button onPress={onPressSetWeekValue('1M')} title="1M"/>
      <Button onPress={onPressSetWeekValue('3M')} title="3M"/>
      <Button onPress={onPressSetWeekValue('1YR')} title="1YR"/>
    </View>);
  }
}

const styles = StyleSheet.create({
  ButtonView:{
    borderTopWidth:0.45,
    borderColor:'#ddd',
    flexDirection:"row",
    justifyContent:"space-between"
  }
})
