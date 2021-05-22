'use strict'
const cryptomonedaSelect = document.querySelector("#criptomonedas");
const formulario = document.querySelector('#formulario')
const objBusqueda = {
    cryptomomeda : ''
}

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
}); 

document.addEventListener("DOMContentLoaded", () => {
    consultaCripto();

    formulario.addEventListener('submit', submitFormulario);
    cryptomonedaSelect.addEventListener('change', leerValor);
});


const consultaCripto = () => {    
    fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD`)
    .then( respuesta => respuesta.json() )
    .then( resultado => obtenerCriptomonedas(resultado.Data) )
    .then( criptomonedas => selectCriptomonedas(criptomonedas) ) 

    //.then( data => {
        //$('#price').text('Precio')
        //$('#mktcp').text('Maeketcap')
    //})
};



function selectCriptomonedas(criptomonedas) {
    
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        cryptomonedaSelect.appendChild(option);
   })


};



function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    const { criptomoneda } = objBusqueda;
    if(criptomoneda === '') {
        mostrarAlerta('Este Campo es Obligatorio');
        return;

    }
}

// function mostrarAlerta(msg) {

// }

function consultarAPI() {
    const { criptomoneda } = objBusqueda

    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=USD`)
    .then( respuesta => respuesta.json() )
    .then( cotizacion  => {
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda])
    })
        

};

function mostrarCotizacionHTML(cotizacion) {

    const {PRICE, MKTCAP} = cotizacion;
    
    
    //$('#price').text.val()
    //$('#mktcp').text('MKTCAP')

}

$('#revisar').on('click', consultarAPI);