// CONSTANTS
// BACKEND ENDPOINTS

// EXCHANGE RATE API
const baseURL = "https://api.exchangeratesapi.io/latest/"
const setBaseCurrency = "https://api.exchangeratesapi.io/latest/?base="
const setHistoricalDate = "https://api.exchangeratesapi.io/2010-01-12"
const getHistoricalDataForATimeWindow = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01"
const compareSpecificCurrencies = "https://api.exchangeratesapi.io/latest?symbols="




// CURRENCY API REQUESTS
// GET LATEST RATES
function getLatestRates() {
    return fetch(baseURL).then(resp => resp.json())
}
// GET LATEST RATES WITH A BASE CURRENCY
function getLatestRatesWithBase(currency) {
    return fetch(setBaseCurrency+currency).then(resp => resp.json())
}

// GET LATEST RATES FOR TWO SPECIFIC CURRENCIES
function getAndComapareTwoCurrencies (currencyOne, currencyTwo) {
    return fetch(compareSpecificCurrencies+currencyOne+","+currencyTwo).then(resp => resp.json())
}

