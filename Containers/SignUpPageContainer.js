import React from 'react';
import {connect} from 'react-redux'
import {signUpRequest } from '@Actions/auth.js'
import {TouchableOpacity, StyleSheet,Text, TextInput,ScrollView, View, ActivityIndicator} from 'react-native'
import {APPDARKGRAY, APPRED} from '@Style/constants.js'
import Button from '@Components/Button'
import {CypherText, CypherTextInput} from "@Style/BaseComponents"


/*
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={false}
*/

class SignUpPageContainer extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email:'',
      password:''
    }
  }

userSignUp(e){
  const navigate = this.props.navigation.navigate
  this.props.onSignUp(this.state.first_name, this.state.last_name, this.state.email, this.state.password, navigate)
  e.preventDefault()
}

render() {
  return(<View style={style.PageView}>
    <CypherText header center>Sign Up</CypherText>
    <CypherTextInput
          placeholder='First Name'
          value={this.state.first_name}
          onChangeText={(text) => this.setState({ first_name: text })} />
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
    <View style ={style.ButtonContainer}>
      <Button pending={this.props.isSigningUp} onPress={(e) => this.userSignUp(e)}>
        <CypherText>Sign Up</CypherText>
      </Button>
    </View>
  </View>)
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
          isSigningUp: state.auth.isSigningUp
      };
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          onSignUp: (first_name,last_name,email, password, navigate) => { dispatch(signUpRequest(first_name,last_name,email, password, navigate)); }
      }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageContainer);
