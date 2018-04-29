import React from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '@Actions/auth.js'
import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput,ScrollView, View, ActivityIndicator} from 'react-native'
import {WEBLIGHTBLUE} from '@Style/constants.js'
import AppLogo from '@Components/AppLogo.js'

import {SignUpScreen} from '@Navigation/Routes'
import Button from '@Components/Button'
import { CypherText, CypherTextInput } from '@Style/BaseComponents';

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
        <CypherText bold header center>Cypher</CypherText>
        <CypherTextInput 
          placeholder="Username"
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}/>
        <CypherTextInput
          placeholder='Password'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}/>
        <View style ={style.ButtonContainer}>
          <Button style={{marginTop:30}}onPress={() => this.userLogin()} 
            pending={this.props.isLoggingIn}
            error={this.props.error}>
            <CypherText>Login</CypherText>
          </Button>
        </View>
      </View>
      );
  }
}

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    padding:20,
    backgroundColor: WEBLIGHTBLUE,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  ButtonContainer:{
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'stretch',
    padding:15,
    flex:1
  },
  formContainer:{
    flex:1,
    paddingTop:10,
    justifyContent:'flex-start'
  },
})

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        error:state.auth.loginerror
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, navigate) => { dispatch(loginRequest(username, password, navigate)); },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
