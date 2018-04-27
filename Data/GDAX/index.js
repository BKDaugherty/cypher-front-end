import {productID, GRAPHSCALES} from './constants'
const baseURL = "https://api.gdax.com"


// Function that returns the paramters for the gdax call
// given a graph scale
// Goal should be to get 30 points
const getGDAXParams = (lengthOfTime) => {
    switch(lengthOfTime){
        case GRAPHSCALES.HOUR:
            break
        case GRAPHSCALES.DAY:
            break
        case GRAPHSCALES.WEEK:
            break
        case GRAPHSCALES.MONTH:
            break
        case GRAPHSCALES.MONTH3:
            break
    }
}


//Can also define start and end time...
export async function getGDAXRates(coin, length){
    //Initialize the gdax client
    const endpoint = `/products/${productID[coin]}/candles`
    const reqURL = baseURL + endpoint
    const granularity = 86400
    //Get the rates by coin using the provided granularity
    try {
        const responseRates = await fetch(`${baseURL}${endpoint}?granularity=${granularity}`)
        const jsonResponseRates = await responseRates.json()
        if(!jsonResponseRates.map){
            //Rate limit exceeded by gdax... just need to wait?
            throw {jsonResponseRates}
            //console.log(jsonResponseRates)
        }
        //Format the array of buckets into a parseable object
        //Not necessary but I think its cleaner... Might be slow?
        const formattedRates = jsonResponseRates.map(bucket => 
            ({    
                    "time":bucket[0],
                    "low":bucket[1],
                    "high":bucket[2],
                    "open":bucket[3],
                    "close":bucket[4],
                    "volume":bucket[5]
                })
            )

        // The current price of the coin
        const currentPrice = formattedRates[0].close ? formattedRates[0].close : 0

        // Gdax returns an array backwards!
        const historicRates = formattedRates.reverse()
        
        return {
            currentPrice,
            historicRates
        }
    }
    catch (error) {
        // Let the caller catch
        throw error
    }  
}
