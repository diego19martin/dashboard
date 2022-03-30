
const currency = function(number){
    return new Intl.NumberFormat().format(number);
};


function priceFormatter(value) {
    // 16777215 == ffffff in decimal
    var valorMuestra = parseFloat(value);
    var v = currency(valorMuestra);
    return "<div class='valor'>" +
    '<i class="fa fa-dollar-sign"> </i> ' +
    v +
    '</div>'
}


selectSala.addEventListener('change', (event) => {
    
    const selectSala = document.getElementById('selectSala');
    const resultado = selectSala.value;
    const cardOficial = document.getElementById('cardOficial');
    const cardEspecial = document.getElementById('cardEspecial');
    const cardJoven = document.getElementById('cardJoven');

    if (resultado === 'OFICIAL') {

        cardOficial.style.display = 'Inline';
        cardEspecial.style.display = 'none';
        cardJoven.style.display = 'none';
        
    
    } else if (resultado === 'ESPECIAL') {

        cardOficial.style.display = 'none';
        cardEspecial.style.display = 'Inline';
        cardJoven.style.display = 'none';

    } else if (resultado === 'JOVEN') {

        cardOficial.style.display = 'none';
        cardEspecial.style.display = 'none';
        cardJoven.style.display = 'Inline';

    } else {
        cardOficial.style.display = 'inline';
        cardEspecial.style.display = 'inline';
        cardJoven.style.display = 'Inline';
    }

});
