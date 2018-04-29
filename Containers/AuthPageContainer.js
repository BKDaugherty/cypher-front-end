import React from 'react';
import {View, StyleSheet, SafeAreaView } from 'react-native'
import {APPDARKGRAY, WEBLIGHTBLUE, WEBDARKBLUE, WEBPINK } from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'
import Button from '@Components/Button'
import {CypherText, DrawerSlot} from '@Style/BaseComponents'
import {SignUpScreen, LoginScreen, TandCScreen} from '@Navigation/Routes'

export default (props) => (
  <SafeAreaView style={style.PageView}>
    <View style={style.LogoContainer}>
      <AppLogo/>
      <CypherText bold center header size={60}>Cypher</CypherText>
    </View>
    

    <DrawerSlot onPress={() => props.navigation.navigate(LoginScreen)} color={WEBLIGHTBLUE}>
      <CypherText bold center header>Login</CypherText>
    </DrawerSlot>
    <DrawerSlot onPress={() => props.navigation.navigate(SignUpScreen)} color={WEBDARKBLUE}>
      <CypherText bold center header>Sign Up</CypherText>
    </DrawerSlot>
    <DrawerSlot onPress={() => props.navigation.navigate(TandCScreen)} color={WEBPINK}>
      <CypherText bold center header>Terms and Conditions</CypherText>
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
    padding:"10%"
  }})