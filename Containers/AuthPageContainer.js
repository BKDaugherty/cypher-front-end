import React from 'react';
import {View, StyleSheet, SafeAreaView } from 'react-native'
import {APPDARKGRAY, WEBLIGHTBLUE, WEBDARKBLUE, WEBPINK } from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'
import Button from '@Components/Button'
import {CypherText, DrawerSlot} from '@Style/BaseComponents'
import {SignUpScreen, LoginScreen, TandCScreen} from '@Navigation/Routes'

const TextButtonSize = 24
export default (props) => (
  <SafeAreaView style={style.PageView}>
    <View style={style.LogoContainer}>
      <AppLogo/>
      <View style={style.empty}/>
      <CypherText bold center header>Cypher</CypherText>
    </View>
    <DrawerSlot onPress={() => props.navigation.navigate(LoginScreen)} color={WEBLIGHTBLUE}>
      <CypherText size={TextButtonSize} bold center header>Login</CypherText>
    </DrawerSlot>
    <DrawerSlot onPress={() => props.navigation.navigate(SignUpScreen)} color={WEBDARKBLUE}>
      <CypherText size={TextButtonSize} bold center header>Sign Up</CypherText>
    </DrawerSlot>
    <DrawerSlot onPress={() => {
    }} color={WEBPINK}>
      <CypherText size={TextButtonSize} bold center header>Terms and Conditions</CypherText>
    </DrawerSlot>
  </SafeAreaView>
)

const style = StyleSheet.create({
  PageView:{
    display:"flex", 
    flex:1, 
    flexDirection:"column", 
    alignItems:"stretch", 
    justifyContent:"center", 
    backgroundColor:APPDARKGRAY
  },
  ButtonContainer:{
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'stretch',
    padding:15,
    flex:1
  },
  LogoContainer:{
    flex:2,
    padding:"10%",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
  empty:{
    padding:5
  }
})