import React from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '@Actions/auth.js'
import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, Button, TextInput,ScrollView, View, ActivityIndicator} from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'

import {SignUpScreen} from '@Navigation/Routes'
import AsyncButton from '@Components/AsyncButton'

class LoginPageContainer extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  userLogin() {
    //Run the passed function with the current username and password
    const navigate = this.props.navigation.navigate
    this.props.onLogin(this.state.username, this.state.password, navigate)
  }

  render() {
    return(
      <View style={style.PageView}>
        <Text style={style.Header}>Login</Text>

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
          <AsyncButton style={{marginTop:30}}onPress={() => this.userLogin()} 
            pending={this.props.isLoggingIn} textContent={"Login"}>
          </AsyncButton>
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
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'stretch'
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
    fontFamily:'pt-mono',
    borderRadius:20,
    marginTop:15,
    padding:10
  },
  formContainer:{
    flex:1,
    paddingTop:10,
    justifyContent:'flex-start'
  },
  Header:{
    color:'#fff',
    fontSize:32,
    fontFamily:'pt-mono',
    alignSelf:'center'
  }
})

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        error:state.auth.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, navigate) => { dispatch(loginRequest(username, password, navigate)); },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
