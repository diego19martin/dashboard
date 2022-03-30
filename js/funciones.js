
function consultaJornada() {

    const selectSala = document.getElementById('selectSala').value;

    if (selectSala === 'TODAS') {

        var datosOficial = [];
        var datosEspecial = [];
        var datosJoven = [];
        var totalBeneOfi = 0;
        var totalBeneEsp = 0;
        var totalBeneJoven = 0;
        var totalCoinOfi = 0;
        var totalCoinEsp = 0;
        var totalCoinJoven = 0;

        var fechaJornada = document.getElementById('date').value;

        url = "http://localhost/dashboard/internas/datosJornada.php?fechaJornada=" + fechaJornada;


        const response = fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.            
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header

        }).then(response => {
            return response.json();
        }).then(datos => {
        
            for(elemento in datos) {
                if(datos[elemento].Sector=="Oficial Balcón" ||
                datos[elemento].Sector=="Oficial FEAR" ||
                datos[elemento].Sector=="Oficial Norte Norte Ofi." ||
                datos[elemento].Sector=="Oficial Norte Ofi." ||
                datos[elemento].Sector=="Oficial Sur Ofi." ||
                datos[elemento].Sector=="Oficial Sur Sur Ofi." ||
                datos[elemento].Sector=="Oficial Torterolo" ||
                datos[elemento].Sector=='Oficial Torterolo "00"' ||
                datos[elemento].Sector=="Oficial Torterolo AlfaStreet $20" ||
                datos[elemento].Sector=="Oficial Torterolo AlfaStreet $5" ||
                datos[elemento].Sector=="Oficial Torterolo BACCARAT" ||
                datos[elemento].Sector=="Oficial Torterolo BLACKJACK" ||
                datos[elemento].Sector=="Oficial Torterolo Mega Slots $1" ||
                datos[elemento].Sector=="Oficial Torterolo R12 $10" ||
                datos[elemento].Sector=="Oficial Torterolo R8" ||
                datos[elemento].Sector=="Oficial Torterolo Royal Match BJ $ 10" ||
                datos[elemento].Sector=="Oficial Torterolo Royal Match BJ $ 5" ) {

                    if(datos[elemento].CoinIn != "0,00"){
                        datosOficial.push(datos[elemento]);
                    };

                } else if (datos[elemento].Sector=="Especial 1º Piso" ||
                datos[elemento].Sector=="Especial Centro" ||
                datos[elemento].Sector=="Especial Entre Piso" ||
                datos[elemento].Sector=='Especial Leguisamo "0"' ||
                datos[elemento].Sector=='Especial Leguisamo "00"' ||
                datos[elemento].Sector=="Especial Leguisamo BACARAT" ||
                datos[elemento].Sector=="Especial Leguisamo Black Jack $ 10" ||
                datos[elemento].Sector=="Especial Leguisamo BLACKJACK" ||
                datos[elemento].Sector=="Especial Leguisamo Centro" ||
                datos[elemento].Sector=="Especial Leguisamo Norte" ||
                datos[elemento].Sector=="Especial Leguisamo Royal Match BJ $ 10" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $10 (Mesa 3)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $10 (Mesa 4)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $20 (Mesa 1)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $20 (Mesa 2)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $5 (Mesa 5)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $5 (Mesa 6)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $50 (Mesa 1)" ||
                datos[elemento].Sector=="Especial Leguisamo Sur" ||
                datos[elemento].Sector=="Especial Norte" ||
                datos[elemento].Sector=="Especial Ruleta Sport Bar" ||
                datos[elemento].Sector=="Especial Sur" ) {

                        if(datos[elemento].CoinIn != "0,00"){
                            datosEspecial.push(datos[elemento]);
                        }

                } else if (datos[elemento].Sector=="Joven B-4" ||
                datos[elemento].Sector=="Joven Balcón Joven" ||
                datos[elemento].Sector=="Joven Entre Piso Joven" ||
                datos[elemento].Sector=="Joven G-4" ||
                datos[elemento].Sector=="Joven Mas 11" ||
                datos[elemento].Sector=="Joven Mas 15" ||
                datos[elemento].Sector=="Joven Mas 15 iBet Roulette" ||
                datos[elemento].Sector=="Joven Mas 15 Royal Match BJ $ 10" ||
                datos[elemento].Sector=="Joven Mas 15 Royal Match BJ $ 5" ||
                datos[elemento].Sector=="Joven MAS 7" ||
                datos[elemento].Sector=="Joven MAS 7 BACARAT" ||
                datos[elemento].Sector=="Joven MAS 7 BLACKJACK" ||
                datos[elemento].Sector=="Joven MAS 7 SUM" ||
                datos[elemento].Sector=="Joven Ruletas $10" ||
                datos[elemento].Sector=="Joven Ruletas $100" ||
                datos[elemento].Sector=="Joven Ruletas $25" ||
                datos[elemento].Sector=="Joven VIP" ||
                datos[elemento].Sector=="Joven Wán" ) {
                    if(datos[elemento].CoinIn != "0,00"){
                        datosJoven.push(datos[elemento]);
                    }         
            }}

            for (var i=0; i < datosOficial.length; i++){
                totalBeneOfi = totalBeneOfi + parseFloat(datosOficial[i].Beneficio);
                totalCoinOfi = totalCoinOfi + parseFloat(datosOficial[i].CoinIn);
            }


            for (var i=0; i < datosEspecial.length; i++){
                totalBeneEsp = totalBeneEsp + parseFloat(datosEspecial[i].Beneficio);
                totalCoinEsp = totalCoinEsp + parseFloat(datosEspecial[i].CoinIn);
            }

            for (var i=0; i < datosJoven.length; i++){
                totalBeneJoven = totalBeneJoven + parseFloat(datosJoven[i].Beneficio);
                totalCoinJoven = totalCoinJoven + parseFloat(datosJoven[i].CoinIn);
            }

            chart(totalBeneOfi, totalBeneEsp, totalBeneJoven);

            datosOficial.push({Sector:'Totales', Beneficio:totalBeneOfi, CoinIn:totalCoinOfi});
            datosEspecial.push({Sector:'Totales', Beneficio:totalBeneEsp, CoinIn:totalCoinEsp});
            datosJoven.push({Sector:'Totales', Beneficio:totalBeneJoven, CoinIn:totalCoinJoven});

            console.log(currency(totalBeneOfi));
            console.log(datosOficial);
            console.log(datosEspecial);
            console.log(datosJoven);
            
            $(function () {
                $('#tableOficial').bootstrapTable({
                    data: datosOficial
                    
                });
                
            });
        
            $(function () {
                $('#tableEspecial').bootstrapTable({
                    data: datosEspecial
                });
            });

            $(function () {
                $('#tableJoven').bootstrapTable({
                    data: datosJoven
                });
            });
        });
   
    } else if (selectSala === 'OFICIAL') {

        var datosOficial = [];
        var totalBeneOfi = 0;
        var totalCoinOfi = 0;

        var fechaJornada = document.getElementById('date').value;

        url = "http://localhost/dashboard/internas/datosJornada.php?fechaJornada=" + fechaJornada;


        const response = fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.            
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header

        }).then(response => {
            return response.json();
        }).then(datos => {
        
            for(elemento in datos) {
                if(datos[elemento].Sector=="Oficial Balcón" ||
                datos[elemento].Sector=="Oficial FEAR" ||
                datos[elemento].Sector=="Oficial Norte Norte Ofi." ||
                datos[elemento].Sector=="Oficial Norte Ofi." ||
                datos[elemento].Sector=="Oficial Sur Ofi." ||
                datos[elemento].Sector=="Oficial Sur Sur Ofi." ||
                datos[elemento].Sector=="Oficial Torterolo" ||
                datos[elemento].Sector=='Oficial Torterolo "00"' ||
                datos[elemento].Sector=="Oficial Torterolo AlfaStreet $20" ||
                datos[elemento].Sector=="Oficial Torterolo AlfaStreet $5" ||
                datos[elemento].Sector=="Oficial Torterolo BACCARAT" ||
                datos[elemento].Sector=="Oficial Torterolo BLACKJACK" ||
                datos[elemento].Sector=="Oficial Torterolo Mega Slots $1" ||
                datos[elemento].Sector=="Oficial Torterolo R12 $10" ||
                datos[elemento].Sector=="Oficial Torterolo R8" ||
                datos[elemento].Sector=="Oficial Torterolo Royal Match BJ $ 10" ||
                datos[elemento].Sector=="Oficial Torterolo Royal Match BJ $ 5" ) {

                    if(datos[elemento].CoinIn != "0,00"){
                        datosOficial.push(datos[elemento]);
                    };

                } 
            }
        

            for (var i=0; i < datosOficial.length; i++){
                totalBeneOfi = totalBeneOfi + parseFloat(datosOficial[i].Beneficio);
                totalCoinOfi = totalCoinOfi + parseFloat(datosOficial[i].CoinIn);
            }

            // chartOfi(totalBeneOfi);

            datosOficial.push({Sector:'Totales', Beneficio:totalBeneOfi, CoinIn:totalCoinOfi});
            
            console.log(currency(totalBeneOfi));
            console.log(datosOficial);
            
            
            $(function () {
                $('#tableOficial').bootstrapTable({
                    data: datosOficial
                    
                });
                
            });         
        })

    } else if (selectSala === 'ESPECIAL') {
     
        var datosEspecial = [];
        var totalBeneEsp = 0;
        var totalCoinEsp = 0;

        var fechaJornada = document.getElementById('date').value;

        url = "http://localhost/dashboard/internas/datosJornada.php?fechaJornada=" + fechaJornada;


        const response = fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.            
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header

        }).then(response => {
            return response.json();
        }).then(datos => {
        
            for(elemento in datos) {
                
                if (datos[elemento].Sector=="Especial 1º Piso" ||
                datos[elemento].Sector=="Especial Centro" ||
                datos[elemento].Sector=="Especial Entre Piso" ||
                datos[elemento].Sector=='Especial Leguisamo "0"' ||
                datos[elemento].Sector=='Especial Leguisamo "00"' ||
                datos[elemento].Sector=="Especial Leguisamo BACARAT" ||
                datos[elemento].Sector=="Especial Leguisamo Black Jack $ 10" ||
                datos[elemento].Sector=="Especial Leguisamo BLACKJACK" ||
                datos[elemento].Sector=="Especial Leguisamo Centro" ||
                datos[elemento].Sector=="Especial Leguisamo Norte" ||
                datos[elemento].Sector=="Especial Leguisamo Royal Match BJ $ 10" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $10 (Mesa 3)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $10 (Mesa 4)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $20 (Mesa 1)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $20 (Mesa 2)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $5 (Mesa 5)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $5 (Mesa 6)" ||
                datos[elemento].Sector=="Especial Leguisamo Ruleta $50 (Mesa 1)" ||
                datos[elemento].Sector=="Especial Leguisamo Sur" ||
                datos[elemento].Sector=="Especial Norte" ||
                datos[elemento].Sector=="Especial Ruleta Sport Bar" ||
                datos[elemento].Sector=="Especial Sur" ) {

                        if(datos[elemento].CoinIn != "0,00"){
                            datosEspecial.push(datos[elemento]);
                        }

                }
            }

            for (var i=0; i < datosEspecial.length; i++){
                totalBeneEsp = totalBeneEsp + parseFloat(datosEspecial[i].Beneficio);
                totalCoinEsp = totalCoinEsp + parseFloat(datosEspecial[i].CoinIn);
            }

            // chart(totalBeneOfi, totalBeneEsp, totalBeneJoven);
         
            datosEspecial.push({Sector:'Totales', Beneficio:totalBeneEsp, CoinIn:totalCoinEsp});
                               
            $(function () {
                $('#tableEspecial').bootstrapTable({
                    data: datosEspecial
                });
            });
        
    });
 
    } else if (selectSala === 'JOVEN') {

        var datosJoven = [];
        var totalBeneJoven = 0;
        var totalCoinJoven = 0;

        var fechaJornada = document.getElementById('date').value;

        url = "http://localhost/dashboard/internas/datosJornada.php?fechaJornada=" + fechaJornada;


        const response = fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.            
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header

        }).then(response => {
            return response.json();
        }).then(datos => {
        
            for(elemento in datos) {
                

                if (datos[elemento].Sector=="Joven B-4" ||
                    datos[elemento].Sector=="Joven Balcón Joven" ||
                    datos[elemento].Sector=="Joven Entre Piso Joven" ||
                    datos[elemento].Sector=="Joven G-4" ||
                    datos[elemento].Sector=="Joven Mas 11" ||
                    datos[elemento].Sector=="Joven Mas 15" ||
                    datos[elemento].Sector=="Joven Mas 15 iBet Roulette" ||
                    datos[elemento].Sector=="Joven Mas 15 Royal Match BJ $ 10" ||
                    datos[elemento].Sector=="Joven Mas 15 Royal Match BJ $ 5" ||
                    datos[elemento].Sector=="Joven MAS 7" ||
                    datos[elemento].Sector=="Joven MAS 7 BACARAT" ||
                    datos[elemento].Sector=="Joven MAS 7 BLACKJACK" ||
                    datos[elemento].Sector=="Joven MAS 7 SUM" ||
                    datos[elemento].Sector=="Joven Ruletas $10" ||
                    datos[elemento].Sector=="Joven Ruletas $100" ||
                    datos[elemento].Sector=="Joven Ruletas $25" ||
                    datos[elemento].Sector=="Joven VIP" ||
                    datos[elemento].Sector=="Joven Wán" ) {
                    if(datos[elemento].CoinIn != "0,00"){
                        datosJoven.push(datos[elemento]);
                    }         
                }
            }
        
            for (var i=0; i < datosJoven.length; i++){
                totalBeneJoven = totalBeneJoven + parseFloat(datosJoven[i].Beneficio);
                totalCoinJoven = totalCoinJoven + parseFloat(datosJoven[i].CoinIn);
            }

            // chart(totalBeneOfi, totalBeneEsp, totalBeneJoven);

            datosJoven.push({Sector:'Totales', Beneficio:totalBeneJoven, CoinIn:totalCoinJoven});
            
            $(function () {
                $('#tableJoven').bootstrapTable({
                    data: datosJoven
                });
            });
        });
    }
}




    
    
    


