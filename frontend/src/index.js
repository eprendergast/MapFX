
document.addEventListener("DOMContentLoaded", () => {
    renderMap()
    countriesAPI.getCountries().then(addEventListenerToEachCountry)
})

function renderMap(){
    let mapData = getMapData();

    new svgMap({
        targetElementID: 'map-container', 
        data: mapData
    });
}

function addEventListenerToEachCountry(countries) {
    const countryCodes = generateArrayOfCountryCodes(countries)
    const countrySelectors = generateArrayOfCountrySelectors(countryCodes)
    debugger
    countrySelectors.forEach(countrySelector => {
       let country = document.getElementById(countrySelector);
       if (country){
        country.addEventListener('click', clickedOnCountry)
       }

    })
}

function generateArrayOfCountryCodes(countries){
    let arrayOfCountryCodes = [];
    countries.forEach(country => {
        arrayOfCountryCodes.push(country.country_code)
    });
    return arrayOfCountryCodes;
}

function generateArrayOfCountrySelectors(countryCodes) {
    let arrayOfCountrySelectors = [];
    countryCodes.forEach(countryCode => {
        arrayOfCountrySelectors.push(`map-container-map-country-${countryCode}`)
    })
    return arrayOfCountrySelectors;
}

function clickedOnCountry(event){
    event.preventDefault();
    alert("You just clicked on a country!")
}

function getMapData(){
    return {
        targetElementID:'map-container',
        data: {
            rate: {
                name: 'Rate',
                format: '{0} GBP'
            }
        }, 
        applyData: 'rate',
        values: {
            CA: {rate: 2},
            US: {rate: 1},
            GB: {rate: 1.5}
        }
    }
}

function generateDataValues(){
    let countryCodes = generateArrayOfCountryCodes()
}

// EVENT LISTENERS
// ON WINDOW LOAD
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); 
});