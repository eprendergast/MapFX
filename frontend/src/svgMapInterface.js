const SVGMAP = {
    renderMap
}

function renderMap(countries){
    let mapData = getMapData();

    new svgMap({
        targetElementID: 'map-container', 
        data: mapData
    });

    addEventListenersToCountries(countries);
}

function addEventListenersToCountries(countries) {
    countries.forEach(country => {
        addEventListenerToCountry(country)
    })
}

function addEventListenerToCountry(country){
    let countryMapId = generateCountryMapId(country)
    let countryMapElement = document.getElementById(countryMapId)
    
    if (countryMapElement) {
        countryMapElement.addEventListener('click', () => {
            clickedOnCountry(event, country)
        })
    } else {
        console.log(`Could not add event listener for ${country.country_name}`)
    }
}

function generateCountryMapId(country) {
    return `map-container-map-country-${country.country_code}`;
}

function clickedOnCountry(event, country){ // CALL NEW FETCH TO FX DATA API FROM HERE
    event.preventDefault();
    alert(`You clicked on ${country.country_name}!`)
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
            UK: {rate: 1.5}
        }
    }
}


