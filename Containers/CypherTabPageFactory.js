import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl, ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import StockGraph from '@Components/StockGraph.js'
import StockGraphController from '@Components/StockGraphController'
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
		   loadHistoricPriceData: (length) => {dispatch(gdaxActions[coinName].initiateRequest(length))},
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
			currentPrice:state.gdax[coinName].currentPrice,
			...ownProps
        };
    }

    //Don't really like this, but it seems tab navigation relies
	//on accepting a class...

	const graphScales = ["1HR","1D","1W", "1M","3M"]

	const styles = genStyles(config)
    class CypherTabPage extends React.Component{
		constructor(props){
			super(props)
			//Bind member function to use this within method
			this.toggleBalanceDisplay = this.toggleBalanceDisplay.bind(this)
			this.loadHistoricPriceData = this.loadHistoricPriceData.bind(this)
			this.updateGraphScale = this.updateGraphScale.bind(this)
			this.state = {
				balanceInFiat:false,
				graphScale:graphScales[0]
			}
		}

		// Local, presentational state
		toggleBalanceDisplay(){
			const alt = !this.state.balanceInFiat
			this.setState({balanceInFiat:alt})
		}

		// Local, presentational state
		updateGraphScale(value){
			this.setState({graphScale:value})
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
			this.props.loadHistoricPriceData(this.state.graphScale)
		}

        render(){ 
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
				<CypherText center header>${this.props.currentPrice}</CypherText>
	        	<StockGraph data={this.props.coinPriceData} />
			</View>
			}
			{!this.props.isLoadingCoinPriceData && <StockGraphController onPress={this.updateGraphScale} />}


			<TouchableOpacity onPress={this.toggleBalanceDisplay}>
	       	 	<CypherText center>
					{this.state.balanceInFiat ?  `Balance: ${this.props.coinBalance} ${coinAbbrev}` : 
					`Balance: ${this.props.coinBalance * this.props.currentPrice} USD` }
				</CypherText>
			</TouchableOpacity>	
	        </ScrollView>
			)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(CypherTabPage)
}
