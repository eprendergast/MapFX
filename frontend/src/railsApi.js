console.log("Countries script loaded")

const API_ENDPOINT = 'http://localhost:3000';
const COUNTRIES_URL = `${API_ENDPOINT}/countries`;

const railsApi = {
    getCountries
}

function getCountries(historicalDataResponse, latestDataResponse){
    return fetch(COUNTRIES_URL).then(response => response.json()).then(countries => countriesHandler(countries, latestDataResponse, historicalDataResponse))
}