console.log("Countries script loaded")

const API_ENDPOINT = 'http://localhost:3000';
const COUNTRIES_URL = `${API_ENDPOINT}/countries`;

const railsApi = {
    getCountries
}

function getCountries(){
    return fetch(COUNTRIES_URL).then(response => response.json())
}