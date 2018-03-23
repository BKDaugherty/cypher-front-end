import React from 'react';
import {connect} from 'react-redux'
import {signUpRequest } from '@Actions/auth.js'
import {StyleSheet, Text, Button, TextInput,ScrollView, View, ActivityIndicator} from 'react-native'
import {APPDARKGRAY, APPRED} from '@Style/constants.js'

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
  return(
  <View style={style.PageView}>
    <Text style={{color:'#fff', fontSize:30, padding:20, alignSelf:'center'}}>{"Sign Up"}</Text>
  <View style={style.formContainer}>
    <TextInput style={style.CustomInputBox}
        placeholderTextColor='#fff'
        placeholder='First Name'
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={false}
        value={this.state.first_name}
        onChangeText={(text) => this.setState({ first_name: text })} />
    <TextInput style={style.CustomInputBox}
    placeholderTextColor='#fff'
            placeholder='Last Name'
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            value={this.state.last_name}
            onChangeText={(text) => this.setState({ last_name: text })} />
    <TextInput style={style.CustomInputBox}
    placeholderTextColor='#fff'
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={false}
        keyboardType='email-address'
        value={this.state.email}
        onChangeText={(text) => this.setState({ email: text })} />
    <TextInput style={style.CustomInputBox}
    placeholderTextColor='#fff'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}/>
    <View style ={style.ButtonContainer}>
      <ActivityIndicator color="#fff" animating={this.props.isSigningUp} size="small"/>
      <Text></Text>
      <Button color='#fff' onPress={(e) => this.userSignUp(e)} buttonStyle={{backgroundColor:'#00d'}} title="Sign Up"/>
      </View>
    </View>
    </View>);
}
}

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    flexDirection:'column',
    padding:20,
    backgroundColor:APPDARKGRAY,
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
    justifyContent:'center'
  }
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
