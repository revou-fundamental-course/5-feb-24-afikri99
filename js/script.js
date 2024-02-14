// Define semua variable yang ada: variable button dan Input
var btnShow     = document.getElementById('btnShow');
var btnKonversi = document.getElementById('btnKonversi');
var btnReset    = document.getElementById('btnReset');
var btnReverse  = document.getElementById('btnReverse');

var inputCelcius    = document.getElementById('inputCelcius');
var inputFahrenheit = document.getElementById('inputFahrenheit');
var carakalkulasi   = document.getElementById('carakalkulasi');

// event click semuany di sini
btnShow.addEventListener('click', showHandler);
btnKonversi.addEventListener('click', btnKonversiHandler);
btnReset.addEventListener('click', btnResetHandler);
btnReverse.addEventListener('click', btnReverseHandler);

// semua handler ketika button diklik
function btnKonversiHandler(){
    document.getElementById('messagesCelcius').style.display    = 'none';
    document.getElementById('messagesFahrenheit').style.display = 'none';
    if(!inputCelcius.value) document.getElementById('messagesCelcius').style.display = 'block';
    else{
        inputFahrenheit.value = (inputCelcius.value * 9/5)+32;
        carakalkulasi.value =  inputCelcius.value+"° x (9/5) + 32 = "+inputFahrenheit.value+"°F";
    }
}
function btnResetHandler(){
    //sapu bersih semua input celcius dan fahrenheit
    inputCelcius.value = null;
    inputFahrenheit.value = null;
    carakalkulasi.value = null;
    //termasuk sapu bersih pesan error (cuma hide aja wkwkwkw) 
    document.getElementById('messagesCelcius').style.display    = 'none';
    document.getElementById('messagesFahrenheit').style.display = 'none';
}
function btnReverseHandler(){
    document.getElementById('messagesCelcius').style.display    = 'none';
    document.getElementById('messagesFahrenheit').style.display = 'none';
    if(!inputFahrenheit.value) document.getElementById('messagesFahrenheit').style.display = 'block';
    else{
        inputCelcius.value = ((parseInt(inputFahrenheit.value)-32) * 5/9);
        carakalkulasi.value =  "(5/9) x ( "+inputFahrenheit.value+"° - 32 ) = "+inputCelcius.value+"°F";
    }
}
function showHandler(){
    var elePenjelasan = document.getElementById("penjelasan");
    if(elePenjelasan.style.display != 'block') {
        elePenjelasan.style.display = 'block';
    }
    else {
        elePenjelasan.style.display = 'none';
    }
}