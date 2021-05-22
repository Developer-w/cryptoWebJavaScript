'use strict'
const cryptomonedaSelect = document.querySelector("#criptomonedas");
const formulario = document.querySelector('#formulario')
const objBusqueda = {
    criptomoneda : ''
}

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
}); 

document.addEventListener("DOMContentLoaded", () => {
    consultaCripto();

    formulario.addEventListener('submit', submitFormulario);
    cryptomonedaSelect.addEventListener('change', leerValor);
});

//select Criptomoneda
const consultaCripto = () => {    

    fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD`)
    .then( respuesta => respuesta.json() )
    .then( resultado => obtenerCriptomonedas(resultado.Data) )
    .then( criptomonedas => selectCriptomonedas(criptomonedas) ) 

   
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


//leer valor Criptomoneda
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

    //consultarAPI();
}

// function mostrarAlerta(msg) {

// }


//Consultando API
function consultarAPI() {
    const { criptomoneda } = objBusqueda;

    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=USD`)
    .then( respuesta => respuesta.json() )
    .then( cotizacion  => {
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda])
    })
        
    //.then( cotizacion => {
        //console.log(cotizacion);
    //})


};

function mostrarCotizacionHTML(cotizacion) {

    const { PRICE, MKTCAP} = cotizacion;


    console.log(cotizacion.USD);
    $('#price').text('PRICE')
    $('#mktcp').text('MKTCAP')


    const precio = document.createElement('p');
    precio.innerHTML = '<p>Precio <span>${PRICE}</span>' 

    //resultado.appendChild(precio)

}

$('#revisar').on('click', consultarAPI);