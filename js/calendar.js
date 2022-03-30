
$('#datepicker').datepicker( {

    format: "d/m/yyyy",
    
});

$(function(){
    $('#datepickermonth').datepicker();
      
});



$("#datepickermonth").datepicker( {
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months"
});

$(function(){
    $('#datepickeryear').datepicker();

    
});

$("#datepickeryear").datepicker( {
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years"
});

$(function(){
    $('#datepickercompararfechaIni').datepicker();

});

$('#datepickercompararfechaFin').datepicker( {
    
});

$(function(){
    $('#datepickercompararmesIni').datepicker();

    
});

$("#datepickercompararmesIni").datepicker( {
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months"
});

$(function(){
    $('#datepickercompararmesIni').datepicker();
});

$("#datepickercompararmesFin").datepicker( {
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months"
});



