const id="svgMapGPD-map-country-BR"

document.addEventListener("DOMContentLoaded", () => {
    renderMap();
})

function renderMap(){
    new svgMap({
        targetElementID: 'svgMapGPD',
        // data: svgMapDataGPD // 
    });
}

// function to add event listener to each country


