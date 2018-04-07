import React from 'react';
import {connect} from 'react-redux'
import {TouchableHighlight, SafeAreaView, StyleSheet, Text, ScrollView, } from 'react-native'
import {APPDARKGRAY} from '@Style/constants.js'
import {NavigationActions} from 'react-navigation'
import {SideDrawerComponent, SideDrawerHeader} from '@Components/DrawerComponent.js'
import {PortfolioTab, SettingsScreen,LoginScreen} from "@Navigation/Routes"

const SideSecureMenuContainer = (props) => 

    {
	return (
	    <SafeAreaView style={styles.container}>
	    <ScrollView style={styles.subContainer}>
	    <SideDrawerHeader title={`Hello ${props.username}`}/>
	    <SideDrawerComponent
	      label="Home"
	      iconProps={{size:32, type:'evilicon', name:'chart', color:'white'}}
	      onPress={props.navigation.navigate(PortfolioTab)}
	    />

	    <SideDrawerComponent
	      label="Settings"
	      iconProps={{size:32, type:'evilicon', name:'gear', color:'white'}}
	      onPress={props.navigation.navigate(SettingsScreen)}
	    />
		<TouchableHighlight onPress={() => { props.navigation.navigate(LoginScreen)}}>
        <Text>Logout</Text>
        </TouchableHighlight>

	    </ScrollView>
	    </SafeAreaView>

	    );
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


export default connect(mapStateToProps)(SideSecureMenuContainer);
