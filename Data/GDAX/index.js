import {productID} from './constants'
const baseURL = "https://api.gdax.com"
//Can also define start and end time...
export async function getHistoricRates(coin, granularity){
    //Initialize the gdax client
    const endpoint = `/products/${productID[coin]}/candles`
    const reqURL = baseURL + endpoint
    //Get the rates by coin using the provided granularity
    try {
        const responseRates = await fetch(`${baseURL}${endpoint}?granularity=${granularity}`)
        const jsonResponseRates = await responseRates.json()
        if(!jsonResponseRates.map){
            //Rate limit exceeded by gdax... just need to wait?
            throw {jsonResponseRates}
            console.log(jsonResponseRates)
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
        return formattedRates
    }
    catch (error) {
        return null
    }  
}
