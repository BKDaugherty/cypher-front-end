import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync.bind(this)
    this._bootstrapAsync()
}

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //Load userToken from persistent state, and use that to login?
    console.log("Token", this.props.userToken)
    this.props.navigation.navigate(this.props.userToken ? 'App' : 'Auth')
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userToken:state.auth
    };
}



export default connect(mapStateToProps, null)(AuthLoadingScreen);
