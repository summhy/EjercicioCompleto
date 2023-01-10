function mostrar(valor) {
var titulo = document.getElementById("tituloDetalle");
var descripcion = document.querySelector("#descripcion");
var precio = document.querySelector("#precio");
var detalle = document.querySelector(".detalle");

detalle.style.display = "block";

    switch (valor) {
        case 1:
            titulo.innerText="Computador";
            descripcion.innerText = "Este es un computador último modelo, año 2001"
            precio.innerHTML = "<strong>$9.990</strong>"
            detalle.style.color = "red";
            break;
        case 2:
            titulo.innerText="Teléfono";
            descripcion.innerText = "Telefono útlima generación, permite enviar SMS"
            precio.innerHTML = "<strong>$99.990</strong>"
            detalle.style.color = "green";
            break;
        case 3:
            titulo.innerText="Café";
            descripcion.innerText = "Café de la india, capuccino"
            precio.innerHTML = "<strong>$109.990</strong>"
            detalle.style.color = "yellow";
            break;
    }

}

function ocultar(){
    var detalle = document.querySelector(".detalle");

detalle.style.display = "none";
}


function digiClock ( )  
    {  
    var crTime = new Date( );  

    console.dir(crTime)
    var crHrs = crTime.getHours ( );  
    var crMns = crTime.getMinutes ( );  
    var crScs = crTime.getSeconds ( );  
    crMns = ( crMns < 10 ? "0" : "" ) + crMns;  
    crScs = ( crScs < 10 ? "0" : "" ) + crScs;  
    var timeOfDay = ( crHrs < 12 ) ? "AM" : "PM";  
    crHrs = ( crHrs > 12 ) ? crHrs - 12 : crHrs;  
    crHrs = ( crHrs == 0 ) ? 12 : crHrs;  
    var crTimeString = crHrs + ":" + crMns + ":" + crScs + " " //+ timeOfDay;  
  
    $("#clock").html(crTimeString);  
  
 }  
  
$(document).ready(function()  
{  
   setInterval('digiClock()', 1000);  
  
});  