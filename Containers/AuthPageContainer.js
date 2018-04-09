import React from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '@Actions/auth.js'
import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, Button, TextInput,ScrollView, View, ActivityIndicator} from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'

import {SignUpScreen} from '@Navigation/Routes'

class AuthPageContainer extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  userLogin(e) {
    //Run the passed function with the current username and password
    const navigate = this.props.navigation.navigate
    this.props.onLogin(this.state.username, this.state.password, navigate)
    e.preventDefault();
  }

  userSignUp(e) {
    console.log(this.props.navigation)
    this.props.navigation.navigate(SignUpScreen)
    e.preventDefault()
  }

  render() {
    console.log(this.props.navigation.state)
    return(
      <View style={style.PageView}>
      <AppLogo/>
      <KeyboardAvoidingView style={style.formContainer}
      behavior="padding">
        <TextInput style={style.CustomInputBox}
            placeholderTextColor='#fff'
            placeholder='Username'
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            keyboardType='email-address'
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })} />
        <TextInput style={style.CustomInputBox}
            placeholderTextColor='#fff'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}/>
        <View style ={style.ButtonContainer}>
          <ActivityIndicator size="small" color="#fff" animating={this.props.isLoggingIn}/>
          <Text>{this.props.error}</Text>
          <TouchableOpacity style={{backgroundColor:APPDARKGRAY}} onPress={(e) => this.userLogin(e)}>
            <Text style={{fontSize:20, color:'#fff', fontFamily:'pt-mono'}}>Log In</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        <View style={style.signUpView}>
          <TouchableOpacity onPress={(e) => { this.userSignUp(e)}}>
            <Text style={{fontSize:16, fontFamily:'pt-mono', color:'#fff'}}>
            Don't have an account? Press Here
            </Text>
            </TouchableOpacity>
        </View> 
      </View>
      );
  }
}

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    padding:20,
    backgroundColor: APPDARKGRAY,
    justifyContent: 'center',
  },
  ButtonContainer:{
    justifyContent:'center',
    flexDirection:'row',
    padding:2,
  },
  CustomInputBox:{
    color:'#fff',
    padding:10,
    margin:1,
    borderWidth:0.5,
    borderColor:'#fff',
    fontFamily:'pt-mono'
  },
  signUpView:{
    flexDirection:'row',
    justifyContent:'center',
  },
  formContainer:{
    flex:1,
    paddingTop:10,
    justifyContent:'flex-start'
  }
})

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isLoggingIn: state.auth.isLoggingIn,
        error:state.auth.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, navigate) => { dispatch(loginRequest(username, password, navigate)); },
        onSignUp: (username, password) => { dispatch(signupRequest(username, password)); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
