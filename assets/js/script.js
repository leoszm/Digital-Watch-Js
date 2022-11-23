const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let mil = dateToday.getMilliseconds();

    if(hr <  10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;
    if(mil < 100) mil = '0' + mil;
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    milesimos.textContent = mil;
})