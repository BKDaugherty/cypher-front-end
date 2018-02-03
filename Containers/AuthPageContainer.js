import React from 'react';
import {connect} from 'react-redux'
import { login } from '@Actions/auth.js'
import {StyleSheet, Text, Button, TextInput,ScrollView, View} from 'react-native'

class AuthPageContainer extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      route: 'Login',
      username: '',
      password: ''
    }
  }

  userLogin(e) {
    //Run the passed function with the current username and password
    this.props.onLogin(this.state.username, this.state.password)
    //Eventually get this running as an async request
    this.props.navigation.navigate("HomePage")
    // .then(() => {
    //   navigate("homePage")
    // });
    e.preventDefault();
  }


  render() {
    return(
      <ScrollView contentContainerStyle={style.PageView}>
        <Text style={{fontSize:40, padding:20}}>{this.state.route}</Text>
        <TextInput style={style.CustomInputBox}
            placeholder='Username'
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            keyboardType='email-address'
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })} />
            <TextInput style={style.CustomInputBox}
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}/>
        <View style ={style.ButtonContainer}>
          <Button onPress={(e) => this.userLogin(e)} buttonStyle={{backgroundColor:'#00d'}} title="Log In"/>
          <Button onPress={(e) => console.log(e)} buttonStyle={{backgroundColor:'#00d'}} title="Sign Up"/>
        </View>
      </ScrollView>
      );
  }
}

const style = StyleSheet.create({
  PageView:{
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  ButtonContainer:{
    justifyContent:'center',
    flexDirection:'row',
    padding:2,
  },
  CustomInputBox:{
    padding:10,
    margin:1,
    borderWidth:0.5
  }
})

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
