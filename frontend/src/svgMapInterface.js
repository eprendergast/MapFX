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

function generateMapConfig(currentRatesResponse, historicalRatesResponse){
    
    let data = generateDataValues(currentRatesResponse, historicalRatesResponse)
    
    return {
        targetElementID: 'map-container',
        data: {
            rate: {
                name: 'rate',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: getMaximumChange(data["rates"]),
                thresholdMin: getMinimumChange(data["rates"])
            },
            change: {
                name: 'Change from selected start date',
                format: '{0} %'
            }
        },
        applyData: 'change',
        values: data
    }
}

function generateDataValues(currentRatesResponse, historicalRatesResponse){
    
    let currentValues = currentRatesResponse["rates"];
    let historicalValues = historicalRatesResponse["rates"];

    for (let country in currentValues) {
        let fxRate = currentValues[country];
        let percentageChange = (fxRate - historicalValues[country])/historicalValues[country] * 100;
        currentValues[country] = {rate: fxRate, change: percentageChange}
    }

    currentValues[currentRatesResponse["base"]] = {rate: 1, change: 0}

    let ratesByCountry = convertCurrencyToCountryCode(currentValues);
    return ratesByCountry;
}


function convertCurrencyToCountryCode(currentValues){
    let ratesByCountry = {};
    for (let currencyCode in currentValues) {
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
    return ratesByCountry;
}