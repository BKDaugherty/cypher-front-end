import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, Button, View, Text} from 'react-native'
import {setTimeScale} from '@Actions/stockGraph'
import {APPPURPLE, APPBLUE, APPRED} from '@Style/constants.js'


class StockGraphController extends React.Component {
  render() {
    return (
    <View style={styles.ButtonView}>
      <Button color={'#fff'} onPress={() => {this.props.onUpdateTimescale("24HR")}} title="24HR"/>
      <Button color={'#fff'} onPress={() => {this.props.onUpdateTimescale("1W")}} title="1W"/>
      <Button color={'#fff'} onPress={() => {this.props.onUpdateTimescale("1M")}} title="1M"/>
      <Button color={'#fff'} onPress={() => {this.props.onUpdateTimescale("3M")}} title="3M"/>
      <Button color={'#fff'} onPress={() => {this.props.onUpdateTimescale("1YR")}} title="1YR"/>
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


const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTimescale: (timeScale) => { dispatch(setTimeScale(timeScale)); },
    }
}

export default connect(null, mapDispatchToProps)(StockGraphController);
