import React from 'react';
import {connect} from 'react-redux'
import {signUpRequest, signUpError } from '@Actions/auth.js'
import {TouchableOpacity, StyleSheet,Text, TextInput,ScrollView, View, ActivityIndicator, KeyboardAvoidingView} from 'react-native'
import {APPDARKGRAY, APPRED} from '@Style/constants.js'
import Button from '@Components/Button'
import {CypherText, CypherTextInput} from "@Style/BaseComponents"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


/*
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={false}
*/

class SignUpPageContainer extends React.Component{

  constructor(props) {
    super(props)
    this.userSignUp = this.userSignUp.bind(this)
    this.state = {
      first_name: '',
      last_name: '',
      email:'',
      password:'',
      confirm_password:'',
    }
  }

userSignUp(e){
  if(this.state.password != this.state.confirm_password){
    // notify the user that their passwords dont match
    this.props.passwordsDontMatch()
  } else {
    const navigate = this.props.navigation.navigate
    this.props.onSignUp(this.state.first_name, this.state.last_name, this.state.email, this.state.password, navigate)
    e.preventDefault()
  }
}

render() {
  return(<KeyboardAwareScrollView style={{backgroundColor:APPDARKGRAY}} contentContainerStyle={style.PageView}>
    <CypherText header center>Sign Up</CypherText>
    <CypherTextInput
          placeholder='First Name'
          value={this.state.first_name}
          onChangeText={(text) => {
            this.setState({ first_name: text })
          }
          } />
      <CypherTextInput
          placeholder='Last Name'
          value={this.state.last_name}
          onChangeText={(text) => this.setState({ last_name: text })} />
      <CypherTextInput
          placeholder='Email'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })} />
      <CypherTextInput
          placeholder='Password'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}/>
      <CypherTextInput
          placeholder='Confirm Password'
          secureTextEntry={true}
          value={this.state.confirmPassword}
          onChangeText={(text) => this.setState({ confirm_password: text })}/>
    <View style ={style.ButtonContainer}>
      <Button pending={this.props.isSigningUp} error={this.props.error} onPress={(e) => this.userSignUp(e)}>
        <CypherText>Sign Up</CypherText>
      </Button>
    </View>

    </KeyboardAwareScrollView>
  )
  }
}

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    padding:20,
    backgroundColor: APPDARKGRAY,
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
})



  const mapStateToProps = (state, ownProps) => {
      return {
          isSigningUp: state.auth.isSigningUp,
          error:state.auth.signuperror
      };
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          onSignUp: (first_name,last_name,email, password, navigate) => { dispatch(signUpRequest(first_name,last_name,email, password, navigate)); },
          passwordsDontMatch:() => dispatch(signUpError("Please ensure that your passwords match!"))
      }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageContainer);
