import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import HomePageContainer from '@Containers/HomePageContainer.js'
import AuthPageContainer from '@Containers/AuthPageContainer.js'

class App extends React.Component {
  render() {
    if (this.props.isLoggedIn)
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(App);
