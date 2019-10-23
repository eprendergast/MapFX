// CONSTANTS
// BACKEND ENDPOINTS
const countriesURL = "http://localhost:3000/countries"
const queriesURL = "http://localhost:3000/queries"
const ratesURL = "http://localhost:3000/rates"

// EXCHANGE RATE API
const baseURL = "https://api.exchangeratesapi.io/latest/"
const setBaseCurrency = "https://api.exchangeratesapi.io/latest/?base="
const setHistoricalDate = "https://api.exchangeratesapi.io/"
const getHistoricalDataForATimeWindow = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01"
const compareSpecificCurrencies = "https://api.exchangeratesapi.io/latest?symbols="


const fxApi = {
    getHistoricalData,
    getLatestRatesWithBase
}

function getHistoricalData(latestDataResponse, baseCurrency, date) {
    return fetch(setHistoricalDate + `${date}` + `?base=` + `${baseCurrency}`).then(resp => resp.json()).then(historicalDataResponse => railsApi.getCountries(historicalDataResponse, latestDataResponse))
}

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
function getAndComapareTwoCurrencies(currencyOne, currencyTwo) {
    return fetch(compareSpecificCurrencies+currencyOne+","+currencyTwo).then(resp => resp.json())
}

// POST TO BACKEND
function post(url, entryData) {
  return fetch(url, {
    method: "POST",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(entryData)
  }).then(response => response.json())
}

// POST NEW QUERY
function postNewQuery(baseCurrency) {
    getLatestRatesWithBase(baseCurrency).then( (resp) => postQuery(queriesURL, resp))
    }

    function postQuery(url, data) {
        let base = {
            base_currency: data.base
        }
        post(url, base).then( response => postRates(response.id, data))
        }

    function postRates(queryId, data) {
      let rates = data.rates
      let keyValuePairs = Object.entries(rates)
      for (const [key, value] of keyValuePairs)
      {
        let exchangeRate = {
          query_id: queryId,
        country_code: key,
        current_rate: parseInt(value)
        }
        // post(ratesURL, exchangeRate)
        console.log(exchangeRate)
      }
    }