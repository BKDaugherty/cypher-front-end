import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomePageContainer from '@Containers/HomePageContainer.js'
import AuthPageContainer from '@Containers/AuthPageContainer.js'

export default class App extends React.Component {

  state ={
    isLoggedIn:false
  }

  render() {
    if (this.state.isLoggedIn)
      return (
        <View style={style.container}>
          <HomePageContainer/>
        </View>
        );
    else
      return (
        <View style={style.container}>
          <AuthPageContainer/>
        </View>
      )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
