window.addEventListener("DOMContentLoaded", () => {
  let queryForm = document.getElementById('query-form')
  queryForm.addEventListener('submit', () => {
    event.preventDefault();
    let currency = event.target.elements.baseCurrency.value;
    let historicalDate = event.target.elements.date.value;
    fxApi.getLatestRatesWithBase(currency).then(latestDataResponse => fxApi.getHistoricalData(latestDataResponse, currency, historicalDate))
  })
})

function countriesHandler(countries, currentRatesResponse, historicalRatesResponse){
  resetMap();
  SVGMAP.renderMap(countries, currentRatesResponse, historicalRatesResponse);
}

function resetMap(){
  let mapContainer = document.getElementById("map-container");
  mapContainer.innerText = "";
}
