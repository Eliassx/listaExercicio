const moovieName = document.getElementById('text');
let timeDuracion = document.getElementById('time')

var timeHour;
var timeMinute;

function converter() {
    timeHour = Math.floor(timeDuracion.value / 60);
    timeMinute = timeDuracion.value % 60;

    document.getElementById('result-moovie').innerHTML = `${moovieName.value}`;
    document.getElementById('result-time').innerHTML = `${timeHour} horas(s) e ${timeMinute} minuto(s)`;
}