'use strict'





const revisarAPI = ()=>{

    console.log($.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD', function(response) {
        
        

        //$('#price').text(precio)
        //$('#mktcp').text(Maeketcap)


    }))

        

};

$('#revisar').on('click', revisarAPI)


