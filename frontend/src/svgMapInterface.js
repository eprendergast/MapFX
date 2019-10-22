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

let apiResponse = {
    rates: {
      CAD: 1.4959,
      HKD: 11.2301,
      LVL: 0.7093,
      PHP: 66.106,
      DKK: 7.4405,
      HUF: 268.18,
      CZK: 26.258,
      AUD: 1.5668,
      RON: 4.1405,
      SEK: 10.2215,
      IDR: 13281.14,
      INR: 66.21,
      BRL: 2.5309,
      RUB: 42.6974,
      LTL: 3.4528,
      JPY: 132.41,
      THB: 47.839,
      CHF: 1.4743,
      SGD: 2.0133,
      PLN: 4.0838,
      BGN: 1.9558,
      TRY: 2.1084,
      CNY: 9.8863,
      NOK: 8.1825,
      NZD: 1.9573,
      ZAR: 10.8264,
      USD: 1.4481,
      MXN: 18.4995,
      EEK: 15.6466,
      GBP: 0.8972,
      KRW: 1627.4,
      MYR: 4.8424,
      HRK: 7.2753
    },
    base: 'EUR',
    date: '2010-01-12'
  }

function generateMapConfig(apiResponse){
    return {
        targetElementID: 'map-container'

    }
}


