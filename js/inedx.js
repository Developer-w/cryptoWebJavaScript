'use strict'

const cryptomonedaSelect = document.querySelector("coin");

document.addEventListener("DOMContentLoaded", () => {
    consultarCoin();
})

function consultarCoin() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( respuesta => console.log(respuesta) )

}





// https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD
// https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD