import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native'
import AppLogo from '@Components/AppLogo'
import {APPDARKGRAY} from '@Style/constants'

export default class LoadingView extends React.Component {
    render() {
      return (
        <View style={{
            flex: 1,
            padding:20,
            backgroundColor: APPDARKGRAY,
            justifyContent: 'center'}}>
            <AppLogo/>
            <ActivityIndicator size="large" color="#fff"/>
        </View> 
      );
    }
}