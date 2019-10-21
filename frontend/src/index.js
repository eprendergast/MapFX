
const exampleID="svgMapGPD-map-country-BR"

document.addEventListener("DOMContentLoaded", () => {
    renderMap();
})

function renderMap(){
    new svgMap({
        targetElementID: 'svgMapGPD',
        // data: svgMapDataGPD // 
    });
}

// need function to add event listener to each country



// EVENT LISTENERS
// ON WINDOW LOAD
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); 
});

