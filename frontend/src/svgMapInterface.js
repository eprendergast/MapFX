const SVGMAP = {
    renderMap
}

function renderMap(countries, currentRatesResponse, historicalRatesResponse){
    let mapData = generateMapConfig(currentRatesResponse, historicalRatesResponse)
    console.log(mapData)

    new svgMap({
        targetElementID: 'map-container',
        data: mapData
    })

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

function generateMapConfig(currentRatesResponse, historicalRatesResponse){
    
    let dataConfig = generateDataValues(currentRatesResponse, historicalRatesResponse)
    return {
        data: {
            rate: {
                name: 'rate',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: getMaximumChange(dataConfig), 
                thresholdMin: getMinimumChange(dataConfig)
            },
            change: {
                name: 'Change',
                format: '{0} %'
            }
        },
        applyData: 'rate',
        values: dataConfig
    }
}


function getMaximumChange(rates){
    let max = 0;
    for(let country in rates){
        if (rates[country].change > max){
            max = rates[country].change;
        } 
    }
    // let maxRate = Object.keys(rates).reduce( (a,b) => rates[a] > rates[b] ? a : b);
    // return rates[maxRate];
    console.log(`Maximum: ${max}`)
    return max;
}

function getMinimumChange(rates){
    let min = 0;
    for(let country in rates){
        if (rates[country].change < min){
            min = rates[country].change;
        } 
    }
    // let minRate = Object.keys(rates).reduce( (a,b) => rates[a] > rates[b] ? a : b);
    // return rates[minRate];
    console.log(`Minimum: ${min}`)
    return min;
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
        targetElementID: 'map-container',
        data: {
            rate: {
                name: 'rate',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: getMaximumRate(apiResponse["rates"]), // CHANGE TO RELATIVE % CHANGE
                thresholdMin: getMinimumRate(apiResponse["rates"])
            },
            change: {
                name: 'Change from selected start date',
                format: '{0} %'
            }
        },
        applyData: 'rate',
        values: generateDataValues(apiResponse)


function generateDataValues(currentRatesResponse, historicalRatesResponse){
    
    let currentValues = currentRatesResponse["rates"];
    let historicalValues = historicalRatesResponse["rates"];

    for (let country in currentValues) {
        let fxRate = currentValues[country];
        let percentageChange = (fxRate - historicalValues[country])/historicalValues[country] * 100;
        currentValues[country] = {rate: fxRate, change: percentageChange} // NEED TO WRITE FUNCTION TO CALCULATE RELATIVE CHANGE
    }

    currentValues[currentRatesResponse["base"]] = {rate: 1, change: 0}

    let ratesByCountry = convertCurrencyToCountryCode(currentValues)
    return ratesByCountry;
}


function convertCurrencyToCountryCode(currentValues){

    let ratesByCountry = {};

    for (let currencyCode in currentValues){
        switch (currencyCode){
            case 'CAD':
                ratesByCountry['CA'] = currentValues[currencyCode]
            case 'HKD':
                ratesByCountry['HK'] = currentValues[currencyCode]
            case 'ISK':
                ratesByCountry['IS'] = currentValues[currencyCode]
            case 'PHP':
                ratesByCountry['PH'] = currentValues[currencyCode]
            case 'DKK':
                ratesByCountry['DK'] = currentValues[currencyCode]
            case 'HUF':
                ratesByCountry['HU'] = currentValues[currencyCode]
            case 'CZK':
                ratesByCountry['CZ'] = currentValues[currencyCode]
            case 'AUD':
                ratesByCountry['AU'] = currentValues[currencyCode]
             case 'RON' :
             ratesByCountry['RO'] = currentValues[currencyCode]
             case 'SEK' :
             ratesByCountry['SE'] = currentValues[currencyCode]
            case 'IDR':
                ratesByCountry['ID'] = currentValues[currencyCode]
            case 'INR':
                ratesByCountry['IN'] = currentValues[currencyCode]
            case 'BRL':
                ratesByCountry['BR'] = currentValues[currencyCode]
            case 'RUB':
                ratesByCountry['RU'] = currentValues[currencyCode]
            case 'HRK':
                ratesByCountry['HR'] = currentValues[currencyCode]
            case 'JPY':
                ratesByCountry['JP'] = currentValues[currencyCode]
            case 'THB':
                ratesByCountry['TH'] = currentValues[currencyCode]
            case 'CHF':
                ratesByCountry['CH'] = currentValues[currencyCode]
            case 'SGD':
                ratesByCountry['SG'] = currentValues[currencyCode]
             case'PLN' :
             ratesByCountry['PL'] = currentValues[currencyCode]
             case'BGN' :
             ratesByCountry['BG'] = currentValues[currencyCode]
             case'TRY' :
             ratesByCountry['TR'] = currentValues[currencyCode]
             case'CNY' :
             ratesByCountry['CN'] = currentValues[currencyCode]
            case 'NOK':
                ratesByCountry['NO'] = currentValues[currencyCode]
             case'NZD' :
             ratesByCountry['NZ'] = currentValues[currencyCode]
             case'ZAR' :
             ratesByCountry['ZW'] = currentValues[currencyCode]
            case 'USD':
                ratesByCountry['US'] = currentValues[currencyCode]
            case 'MXN':
                ratesByCountry['MX'] = currentValues[currencyCode]
             case'ILS' :
             ratesByCountry['IL'] = currentValues[currencyCode]
             case'GBP' :
             ratesByCountry['UK'] = currentValues[currencyCode]
             case'KRW' :
             ratesByCountry['KR'] = currentValues[currencyCode]
             case'MYR' :
             ratesByCountry['MY'] = currentValues[currencyCode]
            case 'EUR':
             ratesByCountry['AD'] = currentValues[currencyCode]
             ratesByCountry['AT'] = currentValues[currencyCode]
             ratesByCountry['BE'] = currentValues[currencyCode]
             ratesByCountry['CY'] = currentValues[currencyCode]
             ratesByCountry['DE'] = currentValues[currencyCode]
             ratesByCountry['EE'] = currentValues[currencyCode]
             ratesByCountry['ES'] = currentValues[currencyCode]
             ratesByCountry['FI'] = currentValues[currencyCode]
             ratesByCountry['FR'] = currentValues[currencyCode]
             ratesByCountry['GF'] = currentValues[currencyCode]
             ratesByCountry['GR'] = currentValues[currencyCode]
             ratesByCountry['IC'] = currentValues[currencyCode]
             ratesByCountry['IE'] = currentValues[currencyCode]
             ratesByCountry['IT'] = currentValues[currencyCode]
             ratesByCountry['LT'] = currentValues[currencyCode]
             ratesByCountry['LU'] = currentValues[currencyCode]
             ratesByCountry['LV'] = currentValues[currencyCode]
             ratesByCountry['MC'] = currentValues[currencyCode]
             ratesByCountry['ME'] = currentValues[currencyCode]
             ratesByCountry['MT'] = currentValues[currencyCode]
             ratesByCountry['NL'] = currentValues[currencyCode]
             ratesByCountry['PT'] = currentValues[currencyCode]
             ratesByCountry['SI'] = currentValues[currencyCode]
             ratesByCountry['SK'] = currentValues[currencyCode]
             ratesByCountry['XK'] = currentValues[currencyCode]
            }

        }
    return ratesByCountry

// function getMaximumRate(rates){
//     let maxRate = Object.keys(rates).reduce( (a,b) => rates[a] > rates[b] ? a : b);
//     return rates[maxRate];
// }

// function getMinimumRate(rates){
//     let minRate = Object.keys(rates).reduce( (a,b) => rates[a] < rates[b] ? a : b);
//     return rates[minRate];
// }

function generateDataValues(apiResponse){


    let data = Object.assign(apiResponse["rates"])
    
    Object.keys(data).forEach(key => {
        debugger
    })


    return {

    }

}
