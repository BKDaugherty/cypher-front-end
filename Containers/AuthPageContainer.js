import React from 'react';
import {View, StyleSheet, } from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'
import Button from '@Components/Button'
import {CypherText} from '@Style/BaseComponents'


import {SignUpScreen, LoginScreen} from '@Navigation/Routes'

export default (props) => (
  <View style={style.PageView}>
    <View style={style.LogoContainer}>
      <AppLogo/>
    </View>
    <View style={style.ButtonContainer}>
      <Button onPress={() => props.navigation.navigate(LoginScreen)}>
        <CypherText>Login</CypherText>
      </Button>
      <Button  onPress={() => props.navigation.navigate(SignUpScreen)}>
        <CypherText>Sign Up</CypherText>
      </Button>
    </View>
  </View>
)

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    padding:20,
    backgroundColor: APPDARKGRAY,
    justifyContent: 'center',
  },
  ButtonContainer:{
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'stretch',
    padding:15,
    flex:1
  },
  LogoContainer:{
    flex:3
  }})