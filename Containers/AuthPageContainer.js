import React from 'react';
import {View} from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class AuthPageContainer extends React.Component{
  render() {
    return(
      <View>
        <FormLabel>Username</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Password</FormLabel>
        <FormInput></FormInput>
        <Button buttonStyle={{backgroundColor:'#00d'}} title="Log In"/>
        <Button buttonStyle={{backgroundColor:'#00d'}} title="Sign Up"/>
      </View>);
  }
}
