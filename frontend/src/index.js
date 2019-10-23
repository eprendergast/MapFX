
window.addEventListener("DOMContentLoaded", () => {
    railsApi.getCountries().then(countries => {
      countriesHandler(countries, currentRatesResponse, historicalRatesResponse)
    })
})

const historicalRatesResponse = {
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

  const currentRatesResponse = {
    rates: {
    CAD: 1.4643,
    HKD: 8.7635,
    ISK: 139.3,
    PHP: 57.046,
    DKK: 7.4708,
    HUF: 329.98,
    CZK: 25.63,
    AUD: 1.624,
    RON: 4.7584,
    SEK: 10.7311,
    IDR: 15713.09,
    INR: 79.169,
    BRL: 4.6059,
    RUB: 71.1373,
    HRK: 7.4378,
    JPY: 121.29,
    THB: 33.804,
    CHF: 1.1002,
    SGD: 1.5203,
    PLN: 4.2788,
    BGN: 1.9558,
    TRY: 6.5047,
    CNY: 7.9025,
    NOK: 10.1638,
    NZD: 1.7432,
    ZAR: 16.4831,
    USD: 1.1173,
    MXN: 21.4,
    ILS: 3.9484,
    GBP: 0.8593,
    KRW: 1309.04,
    MYR: 4.6709
    },
    base: "EUR",
    date: "2019-10-21"
}

function countriesHandler(countries, currentRatesResponse, historicalRatesResponse){
    debugger
    SVGMAP.renderMap(countries, currentRatesResponse, historicalRatesResponse)
}
