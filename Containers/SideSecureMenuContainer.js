import React from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '@Actions/auth.js'
import {StyleSheet, Text, Button, TextInput,ScrollView, View} from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import {NavigationActions} from 'react-navigation'
import {SideDrawerComponent, SideDrawerHeader} from '@Components/DrawerComponent.js'

class SideSecureMenuContainer extends React.Component{

    navigateToScreen = (route) => () => {
	const navigateAction = NavigationActions.navigate({
	    routeName:route
	})
	this.props.navigation.dispatch(navigateAction)
    }
    
    render() {
	return (
	    <View style={styles.container}>
	    <ScrollView style={styles.subContainer}>
	    <SideDrawerHeader title={`Hello ${this.props.username}`}/>
	    <SideDrawerComponent
	      label="Home"
	      iconProps={{size:32, type:'evilicon', name:'chart', color:'white'}}
	      onPress={this.navigateToScreen('HomePage')}
	    />

	    <SideDrawerComponent
	      label="Settings"
	      iconProps={{size:32, type:'evilicon', name:'gear', color:'white'}}
	      onPress={this.navigateToScreen('SettingsPage')}
	    />

	    
	    </ScrollView>
	    </View>

	    );
	}    
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: APPDARKGRAY,
      alignItems: 'center',
      justifyContent: 'center',
  },
    subContainer:{
	marginTop:'10%',
	width:'85%',
    }
});


const mapStateToProps = (state, ownProps) => {
    return {
	username: state.auth.username
    };
}


export default connect(mapStateToProps, null)(SideSecureMenuContainer);
