import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl, ActivityIndicator, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import StockGraph from '@Components/StockGraph.js'
import gdaxActions from '@Actions/GDAX'
import {getBalance} from '@Actions/balance'
import {CypherText} from '@Style/BaseComponents'
//Used to get out of Redux/Native Optimization of requiring
//styles to be an object if used with connect
const genStyles = (config) => {

return StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:config.backgroundColor,
	    justifyContent: 'space-between',
	    alignItems:'center',
	    paddingTop:'10%',
	    paddingBottom:'15%'	    
	},
	gdaxContainer:{
		alignItems:'center',
		justifyContent:'space-between'
	},
	header:{
	    color:'#fff',
	    fontSize:32,
	    fontFamily:'pt-mono'
	},
	content:{
	    color:'#fff',
	    fontSize:40,
		fontFamily:'pt-mono',
		paddingBottom:'10%',
	},
	footer:{
	    color:'#fff',
	    fontSize:32,
	    fontFamily:'pt-mono'
	},
	
})
}

export const genCypherTabPage = (config) => {
	const coinName = config.coinName.replace(/\s+/g, '').toLowerCase();
	const coinAbbrev = config.coinAbbrev
	//Dispatch mapper
    const mapDispatchToProps = (dispatch) => {
        return {
		   loadHistoricPriceData: (granularity) => {dispatch(gdaxActions[coinName].initiateRequest(granularity))},
		   loadCoinBalance: (access_token) => {
			   dispatch(getBalance(access_token, coinName))}
		}
    }

    //Redux state mapping
    const mapStateToProps = (state, ownProps) => {
        return {
            isLoadingCoinPriceData: state.gdax[coinName].isPending,
            coinPriceData:state.gdax[coinName].data,
			coinPriceError:state.gdax[coinName].error,
			coinBalance:state.balance.balances[coinName],
			isLoadingCoinBalance:state.balance.isPending,
			Cypher_Token:state.auth.token,
			...ownProps
        };
    }

    //Don't really like this, but it seems tab navigation relies
	//on accepting a class...

	const styles = genStyles(config)
    class CypherTabPage extends React.Component{
		constructor(props){
			super(props)

			//Bind member functions
			this.loadHistoricPriceData.bind(this)
			this.componentDidMount.bind(this)
			this.loadCoinBalance.bind(this)
			this.loadPageData.bind(this)
		}

		componentDidMount(){
			this.loadPageData()
		}

		loadPageData(){
			this.loadHistoricPriceData()
			if(this.props.Cypher_Token){
				this.loadCoinBalance(this.props.Cypher_Token)
			}
		}

		loadCoinBalance(access_token){
			this.props.loadCoinBalance(access_token)
		}

		loadHistoricPriceData(){
			this.props.loadHistoricPriceData(86400)
		}

        render(){ 
			let coinCurrentPrice = 0
			if(this.props.coinPriceData && this.props.coinPriceData.length > 0 ) {
				const numDataPoints = this.props.coinPriceData.length
				const coinCurrentPriceObj = this.props.coinPriceData[numDataPoints - 1]
				coinCurrentPrice = coinCurrentPriceObj.open
			}

			coinCurrentPrice = coinCurrentPrice.toFixed(2)

            return(
			<ScrollView style={{backgroundColor:config.backgroundColor}} contentContainerStyle={styles.container}
			refreshControl={<RefreshControl 
				refreshing={this.props.isLoadingCoinPriceData || this.props.isLoadingCoinBalance}
				onRefresh={() => this.loadPageData()}
				colors={["white"]}
				style={{backgroundColor:config.backgroundColor}}/>}
			endFillColor={config.backgroundColor}>
						
	        <CypherText header center>{config.coinName}</CypherText>
			{/*Conditionally Render coin price data*/}
			<ActivityIndicator color="#fff" size="large" animating={this.props.isLoadingCoinPriceData}/>
			{!(this.props.isLoadingCoinPriceData || this.props.coinPriceError) && (this.props.coinPriceData) &&
			<View style={styles.gdaxContainer}>
				<CypherText center header>${coinCurrentPrice}</CypherText>
	        	<StockGraph data={this.props.coinPriceData} />
			</View>
			}
			
	        <CypherText center header>Balance:{`${this.props.coinBalance} ${coinAbbrev}`}</CypherText>
	        </ScrollView>
			)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(CypherTabPage)
}
