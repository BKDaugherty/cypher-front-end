import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Application from '@Containers/Application.js'
import store from '@Store/store.js'
import ReduxNavigation from '@Navigation/ReduxNavigation.js'
import { Font } from 'expo'

const storeObj = store()

export default class App extends Component {
    constructor(props){
	super(props)
	this.state = {
	    loadedFonts:false,
	}
    }
    
    async componentDidMount() {
	await Font.loadAsync({
	    'pt-mono': require('./Assets/fonts/PT_Mono/PTM55FT.ttf'),
	    'pt-sans-bold':require('./Assets/fonts/PT_Sans/PT_Sans-Web-Bold.ttf'),
	    'pt-sans-bold-italic':require('./Assets/fonts/PT_Sans/PT_Sans-Web-BoldItalic.ttf'),
	    'pt-sans-italic':require('./Assets/fonts/PT_Sans/PT_Sans-Web-Italic.ttf'),
	    'pt-sans':require('./Assets/fonts/PT_Sans/PT_Sans-Web-Regular.ttf')
	})

	this.setState({ loadedFonts:true })
    }
    render() {

	//Dont render app until fonts are loaded async
	return this.state.loadedFonts ?
	       (<Provider store={storeObj}><ReduxNavigation />
		   </Provider>) : null

    }
}
