import React from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '@Actions/auth.js'
import {StyleSheet, Text, Button, TextInput,ScrollView, View} from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'
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
    this.props.navigation.navigate('signUpScreen')
    e.preventDefault()
  }

  render() {
    return(
      <View style={style.PageView}>
      <AppLogo/>
      <View style={style.formContainer}>
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
          <Button onPress={(e) => this.userLogin(e)} color='#fff' title="Log In"/>
        </View>
        </View>
        <View style={style.signUpView}>
          <Button color='#fff' title="Do have an account? Press Here" onPress={(e) => { this.userSignUp(e)}}/>
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
    borderColor:'#fff'
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
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, navigate) => { dispatch(loginRequest(username, password, navigate)); },
        onSignUp: (username, password) => { dispatch(signupRequest(username, password)); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
