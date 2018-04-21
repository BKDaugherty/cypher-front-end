import {APPDARK, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'
import {genCypherTabPage} from '@Containers/CypherTabPageFactory'

export const BitcoinContainer = genCypherTabPage({
    backgroundColor:APPYELLOW,
    coinName:'Bitcoin',
    coinAbbrev:"BTC",
})

export const EthereumContainer = genCypherTabPage({
    backgroundColor:APPNAVY,
    coinName:'Ethereum',
    coinAbbrev:"ETH",
	
})

export const BitcoinCashContainer = genCypherTabPage({
    backgroundColor:APPGREEN,
    coinName:'Bitcoin Cash',
    coinAbbrev:"BCH",


})

export const LitecoinContainer = genCypherTabPage({
    backgroundColor:APPGRAY,
    coinName:'Litecoin',
    coinAbbrev:"LTC",

})
