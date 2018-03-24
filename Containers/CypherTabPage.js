import {APPDARK, APPGREEN, APPGRAY, APPNAVY, APPYELLOW} from '@Style/constants'
import {genCypherTabPage} from '@Containers/CypherTabPageFactory'

export const BitcoinContainer = genCypherTabPage({
    backgroundColor:APPYELLOW,
    coinName:'Bitcoin',
})

export const EthereumContainer = genCypherTabPage({
    backgroundColor:APPNAVY,
	coinName:'Ethereum',
	
})

export const BitcoinCashContainer = genCypherTabPage({
    backgroundColor:APPGREEN,
    coinName:'Bitcoin Cash',

})

export const LitecoinContainer = genCypherTabPage({
    backgroundColor:APPGRAY,
    coinName:'Litecoin',
})
