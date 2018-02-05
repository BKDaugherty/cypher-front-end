import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StockGraphContainer from '@Containers/StockGraphContainer.js';
import { Icon } from 'react-native-elements';
import {APPDARKGRAY} from '@Style/constants.js'


export default class HomePageContainer extends React.Component{

static navigationOptions = {
  drawerLabel:"Portfolio",
  drawerIcon: () => ( <Icon size={32} type="evilicon" name="chart"/>)
}

render() {
  return (
<View style={styles.container}>
  <View style={styles.ButtonsContainer}>
    <Icon color='#fff' containerStyle={styles.IconContainerLeft} size={32} name="user" type='feather' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
    <Icon color='#fff' containerStyle={styles.IconContainerRight} size={32} name="globe" type='feather' onPress={() => console.log('globe')} />
  </View>

  <View style={styles.StockGraphView}>
    <StockGraphContainer/>
  </View>

  <View style={styles.AppFooter}>
    <Text style={{color:'#fff'}}>Cypher Inc.</Text>
  </View>
</View>
);
}
}

const styles = StyleSheet.create({
  StockGraphView:{
    flex:1,
    paddingTop:5
  },
  container: {
    flex: 1,
    backgroundColor: APPDARKGRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppFooter:{
    flex:0.2,
    justifyContent:'center',
  },
  IconContainerLeft:{
    flex:1,
    paddingLeft:15,
    paddingTop:25,
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:APPDARKGRAY
  },
  IconContainerRight:{
    flex:1,
    paddingRight:15,
    paddingTop:25,
    flexDirection:'row',
    justifyContent:'flex-end',
    backgroundColor:APPDARKGRAY

  },

  ButtonsContainer:{
    flex:0.25,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
  },
});
