
window.addEventListener("DOMContentLoaded", () => {
    railsApi.getCountries().then(countriesHandler)
})

function countriesHandler(countries){
    SVGMAP.renderMap(countries)
}
