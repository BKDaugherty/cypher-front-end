import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux'
import StockGraph from '@Components/StockGraph.js';
import gdaxActions from '@Actions/GDAX'

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
	//Dispatch mapper
    const mapDispatchToProps = (dispatch) => {
        return {
		   loadHistoricPriceData: (granularity) => {dispatch(gdaxActions[coinName].initiateRequest(granularity))}
		}
    }

    //Redux state mapping
    const mapStateToProps = (state, ownProps) => {

        return {
            isLoadingCoinPriceData: state.gdax[coinName].isPending,
            coinPriceData:state.gdax[coinName].data,
			coinPriceError:state.gdax[coinName].error,
			coinBalance:0
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
		}

		componentDidMount(){
			this.loadHistoricPriceData()
		}

		loadHistoricPriceData(){
			this.props.loadHistoricPriceData(60)
		}

        render(){
			const numDataPoints = this.props.coinPriceData.length
			let coinCurrentPrice = 0
			if(numDataPoints > 0) {
				const coinCurrentPriceObj = this.props.coinPriceData[numDataPoints - 1]
				coinCurrentPrice = coinCurrentPriceObj.close
			}

            return(
			<View style={styles.container}>
	        <Text style={styles.header}>{config.coinName}</Text>
			{/*Conditionally Render coin price data*/}
			<ActivityIndicator color="#fff" size="large" animating={this.props.isLoadingCoinPriceData}/>
			{!(this.props.isLoadingCoinPriceData || this.props.coinPriceError) &&
			<View style={styles.gdaxContainer}>
				<Text style={styles.content}>${coinCurrentPrice}</Text>
	        	<StockGraph data={this.props.coinPriceData} />
			</View>
            }
	        <Text style={styles.footer}>Balance:{this.props.coinBalance}</Text>
	        </View>)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(CypherTabPage)
}
